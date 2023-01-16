import Layout from "../component/Layout";
import TambahDataPeminjaman from "../component/modiv/TambahDataPeminjaman";
import Pinjam from "../component/pinjam";
import Cookies from "js-cookie";
import GagalLogin from "../component/GagalLogin";

export default function({peminjamen}){
    const token = Cookies.get('token')

    return(
        <>
            {token ?
                    <>
                        <Layout/>
                        <Pinjam pinjam = {peminjamen.data}/>
                    
                    </>
             :
              <>
              <GagalLogin/>
              </>
            }
        </>
    )
}
export async function getServerSideProps({query}) {
    const namapeminjam = query.namapeminjam

    let url = `http://localhost:1337/api/peminjamen`

    if (typeof namapeminjam === 'string') {
        url = `http://localhost:1337/api/peminjamen?filters[namapeminjam][$contains]=${namapeminjam}`
    }

    const res = await fetch (url)
    const peminjamen = await res.json()
    return {
        props : {
            peminjamen
        }
    }
}




