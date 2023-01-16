import Login from "../component/login";
// import { getServerSideProps } from "./dataBarang";
import GagalLogin from "../component/GagalLogin";


export default function Home({admins}){
    return(
        <>
            <Login  admins = {admins.data}/>
        </>
    )
}

 export async function getServerSideProps({query}){
     const userName = query.userName
     const password = query.password

     const url = `http://localhost:1337/api/admins/}` 

     const res = await fetch (url)
     const admins = await res.json()

     return{props:{admins}}
 }

