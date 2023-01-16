import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";


export default function UpdateAdmin(){

    const [_username, setUserName] = useState('');
    const [_password, setPassword] = useState('');


    const router = useRouter();
    const { id, username, password } = router.query;
    console.log();
    useEffect(() => {
        if (typeof username == 'string') {
            setUserName(username);
        }
        if (typeof password == 'string') {
            setPassword(password)
        }
    }, [id, username, password])
    
    const UpdateAdmin = async (e) => {
        e.preventDefault()
        // setSubmitting(true)
        try {

            axios
                .put(`http://localhost:1337/api/admins/${id}`, {
                  data:{
                    username : _username,
                    password : _password,
                  },

                })
                .then(response => {
                    console.log(response);
                });

            alert("Username dan Password Berhasil Diubah")
            Router.push('/index')
        } catch (e) {
            //throw Error(e.message)
            console.log({ message: e.message });
        }
    }

    return (
      <div className="kotak-admin">
  <div className="header-fom-admin">
    <h1>FORM GANTI PASSWORD</h1>
  </div>
  <div className="main-fom-admin">
    <form>
    <div className="date-fom">
        <label style={{display: 'inline-block', width: 120}}>Username :</label>
        <input type="text" id="user" placeholder="Masukan Username baru" value={username} onChange={(e)=>setUserName(e.target.value)} />
      </div><br />
      <div className="date-fom">
        <label style={{display: 'inline-block', width: 120}}>Password :</label>
        <input type="password" id="user"  value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div><br />
      <button  className="submit-admin" type="button" onClick={UpdateAdmin} >Submit</button>
    </form>
  </div>
</div>

    )
}





