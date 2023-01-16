import Laporan from "../component/Laporan";
import Layout from "../component/Layout";
import Cookies from "js-cookie";
import GagalLogin from "../component/GagalLogin";

export default function({laporans}){
    const token = Cookies.get('token')
    return(
        <>
            {token ?
                    <>
                        
                        <Layout/>
                        <Laporan laporan = {laporans.data} />
                    </>
             :
              <GagalLogin/>
            }
        </>
    )
}
export async function getServerSideProps({query}) {
    const tanggalpinjam = query.tanggalpinjam

    let url = `http://localhost:1337/api/laporans`

    if (typeof tanggalpinjam === 'string') {
        url = `http://localhost:1337/api/laporans?filters[tanggalpinjam][$contains]=${tanggalpinjam}`
    }

    const res = await fetch (url)
    const laporans = await res.json()
    return {
        props : {
            laporans
        }
    }
}
// export async function getServerSideProps() {
//     const res = await fetch ("http://localhost:1337/api/laporans")
//     const laporans = await res.json()
//     return {
//         props : {laporans}
//     }
// }