import Link from "next/link";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";

export default function Navbar(){
   const router = useRouter()
    return (
    <div className="wrapper">
      <div className="header">
        <p>ADMIN SARPRAS | <b> MAN 1 BANYUWANGI</b></p>
        
        <button className="logout" type="button" onClick={()=>{Cookies.remove('token'); router.push('/')}}>LogOut</button>
        

      </div>
    </div>

    )
}