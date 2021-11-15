import React,{useState,useEffect} from 'react'
import Header from './headercomponent/Header'
import Cartmodal from './headercomponent/Cartmodal'

export default function Home() {

    const [slider, setslider] = useState("")
    const [count, setcount] = useState(0)
    const subcategory = [
        {id:2,image:"images/banner.jpg",name:'Eat TheriBow',des:"this is description"},
        {id:2,image:"images/banner-1.jpg",name:'Eat her',des:"this is description 2"},
        {id:3,image:"images/banner-2.jpg",name:'Eat me',des:"this is description 3"},
        {id:3,image:"images/banner-1.jpg",name:'Eat You',des:"this is description 4"}
    ]

    useEffect(() => {
        setslider(subcategory[count])
    },[])

    useEffect(() => {
        setTimeout(() => {
            if (subcategory.length-1 === count) {
                setcount(0)
            } else {
               setcount(count+1) 
            }
            setslider(subcategory[count])
        }, 3000);
        
    }, [count])

    return (
        <>
        <Header>
            <section className="w-full relative">
                <div>
                    <img className="w-full h-96" src={slider.image} alt="" />
                </div>
                <div className="absolute inset-y-1/2 inset-x-1/4 w-96">
                    <h2 className="text-6xl font-bold text-center text-white">{slider.name}</h2>
                    <p className="text-center text-white text-2xl">{slider.des}</p>
                </div>
            </section>
        </Header>
        <Cartmodal/>
        </>
    )
}
