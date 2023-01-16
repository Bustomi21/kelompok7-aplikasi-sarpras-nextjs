import TambahAdmin from "../../component/modiv/TambahAdmin";
import Cookies from "js-cookie";

export default function tambahAdmin () {
    const token = Cookies.get('token')

    return(
        <>
            {token ?
            <TambahAdmin/>
             :
             <GagalLogin/>
            }
        </>
    )
}