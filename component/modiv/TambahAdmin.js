import { useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

export default function TambahAdmin(){
   const [user, setUser] = useState('');
   const [password, setPassword] = useState('');
  
  

      async function addAdmin(e){
       e.preventDefault()
         try {
          
             axios
                 .post(`http://localhost:1337/api/admins`, {
                   "data":{
                     username : user,
                     password : password,

                    }
                 })

                 .then(response => {
                     console.log(response);
                 });

           
             alert("Admin Berhasil Ditambahkan")
             Router.push('/index')
             clearInput()
         } catch (e) {
             throw Error(e.message)
         }

         const clearInput = () => {
           setUser('')
           setPassword('')

          
       }

     }
    return (
      <div className="kotak-admin">
  <div className="header-fom-admin">
    <h1>FORM TAMBAH ADMIN</h1>
  </div>
  <div className="main-fom-admin">
    <form>
    <div className="date-fom">
        <label style={{display: 'inline-block', width: 120}}>Username :</label>
        <input type="text" id="user" placeholder="Masukan Username" value={user} onChange={(e)=>setUser(e.target.value)} />
      </div><br />
      <div className="date-fom">
        <label style={{display: 'inline-block', width: 120}}>Password :</label>
        <input type="password" id="user" placeholder="Masukan Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div><br />
      <button  className="submit-admin" onClick={addAdmin} type="button" >Submit</button>
    </form>
  </div>
</div>

    )
}





