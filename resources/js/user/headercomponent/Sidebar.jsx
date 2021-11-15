import React,{useState} from 'react'
import { FaBars, FaAdn} from "react-icons/fa";

export default function Sidebar() {
    const [toggle, settoggle] = useState(false)
    const [status, changeStatus] = useState({
		activeObject: 0,
		object: [{"id":0},{"id":1},{"id":2},{"id":3}]
	})
	
	const toggleActive = (index) =>{
		console.log(status.activeObject)
		changeStatus({...status,activeObject:index})
	  }
	const category =  [{id:1,name:'main1',sub:0},{id:2,name:'ami12',sub:1},{id:3,name:'ami21',sub:1},{id:4,name:'ami22',sub:0}]
	const subcategory = [{id:2,name:'ami1'},{id:2,name:'ami12'},{id:3,name:'ami21'},{id:3,name:'ami22'}]

    return (
        <div className="md:w-60">
			{/* <!-- mobile menu bar --> */}
			<div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
				<a href="#" className="block p-4 text-white  font-bold">Better dev
				</a>

				{/* <!-- mobile menu button --> */}
				<button onClick={() => settoggle(!toggle)} className="mobile-menu-button p-4 focus:outline-none focus:bg-red-800">
                    <FaBars/>
				</button>
			</div>
			{/* <!-- sidebar --> */}
			<div className={((toggle)? "": "-translate-x-full")+ " sidebar bg-blue-800 text-blue-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:fixed md:translate-x-0 transition duration-200 ease-in-out z-50 overflow-hidden overflow-x-hidden"}>
				{/* <!-- logo --> */}
				<a href="#" className="text-white flex items-center space-x-2 px-4">
                    <FaAdn />
					<span className="text-2xl font-extrabold">MyPortHouse</span>
				</a>
				<nav>
				{category.map((elements,index) => (
					<li key={index} className="w-full" style={{listStyleType:"none"}}>
						{(elements.sub === 1)?
						<button onClick={() =>toggleActive(elements.id)} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2 w-full">{elements.name}</button>
						
						:<a className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">{elements.name}</a>}
						{(elements.sub === 1)?
							<ul className={((status.activeObject !== elements.id)? "hidden":"")+ " flex flex-col items-center w-full"}>
								{subcategory.map((e,i) =>(
									
									(e.id === elements.id)?
									<a key={i} href="dsf" className="block text-center ml-20 w-2/3 py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">{e.name}</a>
									:null
								))}
							</ul>:null}
						
					</li>
				))
				}
					<li className="w-full" style={{listStyleType:"none"}}>
						<a className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Home</a>
					</li>
					
					<li className="w-full" style={{listStyleType:"none"}}>
						<button onClick={() =>alert("dfds swef")} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2 w-full">Home</button>
						<ul className="flex flex-col items-center w-full hidden">
							<a href="dsf" className="block text-center ml-20 w-2/3 py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">fsdf</a>
							<a href="dsf" className="block text-center ml-20 w-2/3 py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">fsdf</a>
						</ul>
					</li>
						
					<a href="#four" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Price</a>
					<a href="#" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Features</a>
				</nav>
			</div>
		</div>
    )
}
