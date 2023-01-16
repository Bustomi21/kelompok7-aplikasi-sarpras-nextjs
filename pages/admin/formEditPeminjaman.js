import UpdateDataPeminjaman from "../../component/modiv/UpdateDataPeminjaman";
import Cookies from "js-cookie";
import GagalLogin from "../../component/GagalLogin";

export default function FormEditPeminjaman(){
    const token = Cookies.get('token')
    return(
        <>
            {token ?
            <UpdateDataPeminjaman/>
             :
             <GagalLogin/>
            }
        </>
    )
}