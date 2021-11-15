import React ,{useState} from 'react'

import Sidebar from './Sidebar';
import Topnav from './Topnav';

export default function Header(props) {
    
    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar/>

	{/* <!-- content --> */}
	<div className="flex-1 ">
		{/* <!-- navbar gose here --> */}
		<Topnav history={props.history}/>
		<div>{props.children}</div>
	</div>
</div>

    )
}
