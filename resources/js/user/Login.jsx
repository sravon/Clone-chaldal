import React,{useState, useContext} from 'react'
import Axios from '../Axios/Axios'
import Header from './headercomponent/Header'
// import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [data,setData] = useState({email:"",password:""})
    //const contextuuu = useContext(UserContext)
    let navigate = useNavigate();

    const loginUser = e => {
        e.preventDefault();
        
        Axios.post('api/users/login', data).then(response => {
            if(response.status == 200){
                const token = response.data.token
                const user = response.data.user
                localStorage.setItem('token', token);
                //contextuuu.setUser(response.data.user);
                console.log(user);
                console.log(token);
                navigate('/');;
            }else if(response.status == 201){
                
                console.log(response.data);
            }
        })

    }

    return (
        <>
        <Header>
            <div className="w-full bg-gray-400 p-5">
                <div className="bg-white p-20 rounded shadow-2xl w-1/2 mx-auto mt-4">
                    <h2 className="text-3xl font-bold mb-8 text-purple-800 mb-4 text-center">Login Your Account</h2>
                    <form action="" className="space-y-3" onSubmit={ e => loginUser(e)}>
                            <div className="flex">
                            <label className="mr-10 font-bold w-1/5" htmlFor="">Email</label>
                            <input className="w-4/5 border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                             type="email" name="email" value={data.email}
                             onChange={ e =>setData({...data,email:e.target.value}) }/>
                            </div>
                            <div className="flex">
                            <label className="mr-2 font-bold w-1/4" htmlFor="">Password</label>
                            <input className="w-3/4 border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                             type="password" name="password" value={data.password}
                             onChange={ e =>setData({...data,password:e.target.value}) } />
                            </div>
                            <div className="flex justify-between">
                            <button type="submit" className="hover:text-purple-300 rounded text-purple-900 transition duration-300">Forget Password?</button>
                            <button type="submit" className=" bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 transition duration-300">Log In</button>
                            </div>
                    </form>
                </div>
            </div>
            </Header> 
        </>
    )
}
