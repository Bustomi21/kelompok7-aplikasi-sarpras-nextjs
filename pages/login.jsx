//@ts-check
import axios  from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { useState } from "react";

export default function Login (admins) {
    const [username, setUserName] = useState('')
     const [password, setPassword] = useState('')
     const [userData, setUserData] = useState({ 
          identifier: '',
          password: '',
      });

      const router = useRouter()

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`http://localhost:1337/api/auth/local`, {
        identifier: userData.identifier,
        password: userData.password
        })
        .then(response => {
        console.log(response.data.jwt)
        Cookies.set('token', response.data.jwt);
        router.push(`/dashboard`)
        })
        .catch(error => {
        console.log('An error occurred:', error.response);
        alert('login gagal')
        });
    }catch (e) {
        console.log(e.messege);
    }
    }
    const handleChange = (e) => {
    const {name, value } = e.target;
    setUserData({...userData, [name]: value})
    }
    return (
      <div className="wrapper">
        <img src="images/back.png" className="wave" />
        <div className="container-two">
          <div className="img">
            <img src="images/gambar.svg" />
          </div>
          <div className="login-container">
            <div className="log">
               <form onSubmit={handleSubmit}>
                <img className="avatar" src="/images/avatar.svg" />
                <h2>Selamat Datang <b>Admin</b></h2>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-user" />
                  </div>
                  <div> 
                    <input className="input" type="text" id="form2Example2" name="identifier" placeholder="Username" onChange={e => handleChange(e)} />
                  </div>
                </div>
                <div className="input-div two">
                  <div className="i">
                    <i className="fas fa-lock" />
                  </div>
                  <div>
                    <input className="input" type="text" id="form2Example2" name="password" placeholder="Kata Sandi" onChange={e => handleChange(e)} />
                  </div>
                </div>
                <div className="modiv-login">
                <Link href="/admin/tambahAdmin">
                  <button type="submit" className="edit" defaultValue="masuk">Tambah Admin</button>
                </Link>
                </div>
                <div className="modiv-login">
                <Link href={
                    { pathname : '/admin/editAdmin', 
                      query : {
                        id : admins.id,
                        username : username,
                        password : password,
                      }
                    }}>
                 {/*  <button type="submit" className="edit" defaultValue="masuk">Ubah Password</button> */}
                </Link>
                </div>
                {/* <Link href="/dashboard"> */}
                  <button type="submit" className="btn" defaultValue="masuk">Masuk</button>
                {/* </Link> */}
              </form> 
            </div>
          </div>
        </div>
      </div>

    )
}