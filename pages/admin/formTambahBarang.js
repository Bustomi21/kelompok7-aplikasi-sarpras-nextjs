import TambahDataBarang from "../../component/modiv/TambahDataBarang";
import Cookies from "js-cookie";
import GagalLogin from "../../component/GagalLogin";



export default function formTambahBarang(){
    const token = Cookies.get('token')

    return(
        <>
            {token ?
            <TambahDataBarang/>
             :
             <GagalLogin/>
            }
        </>
    )
    
}











