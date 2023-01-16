import UpdateAdmin from "../../component/modiv/UpdateAdmin";
import Cookies from "js-cookie";

export default function editAdmin () {
    const token = Cookies.get('token')
    return(
        <>
            {token ?
            <UpdateAdmin/>
             :
              <p>Anda Belum Login</p>
            }
        </>
    )
}
