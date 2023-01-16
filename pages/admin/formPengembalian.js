import FormPengembalian from "../../component/modiv/FormPengembalian";
import Cookies from "js-cookie";
import GagalLogin from "../../component/GagalLogin";

export default function(){
    const token = Cookies.get('token')
    return(
        <>
            {token ?
            <FormPengembalian/>
             :
             <GagalLogin/>
            }
        </>
    )
}