import Dashboard from "../component/Dashboard";
import Layout from "../component/Layout";
import Cookies from "js-cookie";
import GagalLogin from "../component/GagalLogin";

export default function(){
    const token = Cookies.get('token')
    return(
        <>
            {token ?
                <div>

                    <Layout/>
                    <Dashboard  />
                </div>
             :
             <GagalLogin/>
            }
        </>
    )
}
