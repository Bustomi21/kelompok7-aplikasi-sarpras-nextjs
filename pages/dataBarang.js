
import { LinkProps } from "next/link";
import Barang from "../component/barang";
import Layout from "../component/Layout";
import Cookies from "js-cookie";
import GagalLogin from "../component/GagalLogin";


export default function DataBarang ({databarangs}){
    const token = Cookies.get('token')

    return(
        <>
            {token ?
                    <>
                        <Layout/>
                        <Barang data = {databarangs.data} />
                    </>
             :
             <GagalLogin/>
            }
        </>
    )
}

export async function getServerSideProps({query}) {
    const barang = query.barang

    let url = `http://localhost:1337/api/data-barangs`

    if (typeof barang === 'string') {
        url = `http://localhost:1337/api/data-barangs?filters[barang][$contains]=${barang}`
    }

    const res = await fetch (url)
    const databarangs = await res.json()
    return {
        props : {
            databarangs
        }
    }
}