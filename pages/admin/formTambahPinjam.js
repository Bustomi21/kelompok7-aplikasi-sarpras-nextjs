import TambahDataPeminjaman from "../../component/modiv/TambahDataPeminjaman";
import Cookies from "js-cookie";
import GagalLogin from "../../component/GagalLogin";

export default function formTambahPinjam(){
    const token = Cookies.get('token')
  
    return(
        <>
            {token ?
            <TambahDataPeminjaman/>
             :
             <GagalLogin/>
            }
        </>
    )
}