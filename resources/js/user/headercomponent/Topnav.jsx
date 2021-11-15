import React,{useState,useEffect} from 'react'
import Axios from '../../Axios/Axios'
import { useNavigate,Redirect } from 'react-router-dom';
import { FaAdn, FaSearch} from "react-icons/fa";

export default function Topnav(props) {
	const navigate = useNavigate();
	const [loginner, setloginner] = useState(false)
	
	const token = localStorage.getItem("token")
	const headers = {
		Authorization: "Bearer " + token
	}

	const logoutuser = () =>{
		
			Axios.get('api/users/logout',{headers}).then(response => {
				console.log(response)
				if(response.status === 200){
					//props.history.push("login")
					console.log(2)
					navigate("login")
				}else if(response.status == 201){
					console.log(response.data);
				}

			})
		
		
	}

	

    return (
        <nav className="bg-yellow-500 md:block hidden p-2">
			<div className="max-w-6xl mx-auto ">
				<div className="flex justify-between">
					
					<div className="flex items-center w-3/4">
						<a href="#" className="flex items-center py-4 px-3">
						<FaAdn/>
						</a>
						<div className="flex justify-between items-center w-full bg-white p-1 rounded">
							<input type="text" className="w-full h-10 focus:outline-none" name="" placeholder="Search for products (e.geggs, milk, potato)"/>
							<FaSearch />
						</div>
					</div>
					<a href="#" className="items-center rounded mx-1 py-2 px-2 text-white bg-red-400">English</a>
						
					<div className="hidden md:flex items-center space-x-1 mx-2">
						{/* <div>
							<a href="#" className="flex items-center rounded-full py-2 px-2 bg-gray-400">
								<img src="32.png" className="rounded-full mr-1"/>
								<span>Shrabon</span>
							</a>
						</div> */}
						<a href="#" className="items-center rounded py-2 px-2 text-white font-semibold hover:bg-red-900">Login</a>
						<a href="#" className="items-center rounded py-2 px-2 text-white font-semibold hover:bg-red-900">Signup</a>
						<button className="items-center rounded py-2 px-2 text-white font-semibold hover:bg-red-900"
								onClick={
									logoutuser}
						>Logout</button>
						{/* <a href="" className="py-4 px-3 hover:bg-red-700">
                            <FaSearch />
						</a>
						<a href="" className="py-4 px-3 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-900 transition duration-300">
                            <FaSearch />
						</a> */}
					</div>
					<div className="md:hidden flex items-center">
						<button className="mobile-menu-button">
							<FaSearch/>
						</button>
					</div>
				</div>
			</div>
			
			<div className="mobile-menu hidden md:hidden">
				<a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
				<a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">pricing</a>
			</div>
		</nav>
    )
}
