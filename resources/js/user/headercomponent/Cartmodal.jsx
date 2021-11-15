import React,{useState} from 'react'
import { FaBars, FaAdn} from "react-icons/fa";

export default function Cartmodal() {
    const [cartbtn, setcartbtn] = useState(false)
    return (
        <>
            <div onClick={() => setcartbtn(!cartbtn)} className={((cartbtn)?"hidden":"")+" cartbutton fixed top-1/2 right-0 w-20 h-20 bg-red-600"} style={{zIndex:6666}}>
                <div className="flex flex-col justify-between items-center">
                    <div className="bg-gray-300 w-full flex flex-col items-center p-3 cursor-pointer">
                        <p>
                            <FaAdn/>
                        </p>
                        <p>0 Items</p>
                    </div>
                    <p className="bg-gray-200 w-full text-center p-2">Tk 120</p>
                </div>
            </div>

            <div className={((cartbtn)?"":"hidden")+" fixed top-14 bottom-0 right-0 w-80 h-full bg-gray-100"} style={{zIndex:6666}} id="cartmodal">
                <div className="flex flex-col justify-between items-center">
                    <div className="bg-gray-300 w-full flex justify-between items-center p-3">
                        <p className="flex items-center">
                            <FaAdn/>
                            <span>0 Items</span>
                        </p>
                        <button onClick={() => setcartbtn(!cartbtn)} className="cursor-pointer close-cart">X</button>
                    </div>
                    <div className="bg-gray-200 w-full p-2">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col items-center">
                                <button className="bg-green-400 p-2 text-white">+</button>
                                <h6>1</h6>
                                <button className="bg-red-400 p-2 text-white">-</button>
                            </div>
                            <img src="suma.jpg" width="50" />
                            <p>ddfsf asdfa asdas</p>
                            <p>400Tk</p>
                            <p>x</p>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 mb-20 h-10 flex justify-between w-full rounded">
                        <h2 className="text-center bg-red-300 w-1/2 p-2">Place Order</h2>
                        <h2 className="text-center bg-red-500 w-1/2 p-2">400 Tk</h2>
                    </div>
                </div>
                
            </div>
        </>
    )
}
