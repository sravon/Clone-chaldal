import React,{useState} from 'react'
import Header from './headercomponent/Header'
import Axios from '../Axios/Axios'

export default function Register() {
    const [error,seterror] = useState({color:null,msg:null})
    const [data, setData] = useState({
		name: "", email: "",number : "", gender : null,address: "",
        password: "", password_confirmation:""
	})

    const insertUser = (data) =>{
        Axios.post('api/users', data).then(response => {
            if(response.status == 200){
                seterror({...error,color:"text-green-700",msg:response.data})
            }else if(response.status == 201){
                seterror({...error,color:"text-red-700",msg:response.data})
                console.log(response.data);
            }
        })
    }

    const registerUser = e =>{
        e.preventDefault()
        console.log(data)
        insertUser(data)
    }

    return (
        <>
        <Header>
            <div className="w-full bg-gray-400 p-5">
                <div className="bg-white p-20 rounded shadow-2xl w-1/2 mx-auto mt-4">
                    <h2 className="text-3xl font-bold mb-8 text-green-800 mb-4 text-center">Registration Your Account</h2>
                    <span className={error.color + " block text-center p-2"}>{error.msg}</span>
                    <form action="" className="space-y-3" onSubmit={e => registerUser(e)}>
                            <input className="w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                                type="text" name="name" value={data.name} 
                                onChange={ e =>setData({...data,name:e.target.value}) }
                                placeholder="Enter your Name" />
                            <input className="w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                                type="email" name="email" value={data.email} 
                                onChange={ e =>setData({...data,email:e.target.value}) }
                                onBlur={() => emailCheck()}
                                placeholder="Enter your Email" />
                            <div className="flex items-center">
                                <p className="bg-gray-400 px-2 py-3">+88</p>
                                <input className="w-full border border-gray-400 p-3 outline-none focus:border-blue-400" 
                                    type="text" name="number" value={data.number} 
                                    onChange={ e =>setData({...data,number:e.target.value}) }
                                    placeholder="Enter your phone number" maxLength={11} />
                            </div>
                            <div className="flex justify-between">
                                <label className="font-bold">Gender</label>
                                <div className="space-x-2">
                                    <input type="radio" name="age" value="m" 
                                    onChange={ e =>setData({...data,gender:e.target.value}) }/>
                                    <label >Male</label>
                                </div>
                                <div className="space-x-2"> 
                                    <input type="radio" name="age" value="f"
                                    onChange={ e =>setData({...data,gender:e.target.value}) }/>
                                    <label >Female</label>
                                </div>
                                <div className="space-x-2">
                                    <input type="radio" name="age" value="o"
                                    onChange={ e =>setData({...data,gender:e.target.value}) }/>
                                    <label >Others</label>
                                </div>
                            </div>
                            <input className="w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                                type="text" name="address" value={data.address}
                                onChange={ e =>setData({...data,address:e.target.value}) }
                                placeholder="Enter your Address" />
                            <input className="w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                                type="password" name="password" value={data.password}
                                onChange={ e =>setData({...data,password:e.target.value}) }
                                placeholder="Enter your Password" />
                            <input className="w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                                type="password" name="password" value={data.password_confirmation} 
                                onChange={ e =>setData({...data,password_confirmation:e.target.value}) }
                                placeholder="Re-type your password" />
                            <div className="flex justify-between">
                            <button type="submit" className="hover:text-purple-300 rounded text-purple-900 transition duration-300">Already have account?Login now</button>
                            <button type="submit" className=" bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 transition duration-300">Registration now</button>
                            </div>
                    </form>
                </div>
            </div>
            </Header> 
        </>
    )
}
