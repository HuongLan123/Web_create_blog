import React from 'react'
import '../../Pages/Home/navbar.css'
import {getInitials} from '../edit.js'
const ProfileInfo = ()=>{
	return(
		<div className="flex items-center gap-3">
			<div className="w-16 h-16 flex items-center justify-center rounded-full text-slate-950 bg-slate-100">
			{getInitials('John Wiliam')}
			</div>
			<div className="account">
			<p className="name_account">Lan</p>
			<button className="trangthai">Logout</button>
			</div>
		</div>

		);
};
export default ProfileInfo;
