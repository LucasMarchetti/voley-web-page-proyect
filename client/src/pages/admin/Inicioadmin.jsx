import CategorySelect from "../../components/admin/CategorySelect";
import Sidebar from "../../components/admin/Sidebar";
import RoundRobinCard from "../../components/admin/RoundRobinCard";
import NewPermissionCard from "../../components/admin/NewPermissionCard";
import AllPermissionsCard from "../../components/admin/AllPermissionsCard";
import NewStadiumCard from "../../components/admin/NewStadiumCard";
import AllStadiumsCard from "../../components/admin/AllStadiumsCard";
import PersonalizedRoundRobinCard from "../../components/admin/PersonalizedRoundRobinCard";
import "./styles.css"

export default function federacionCatamarca () {

    return (
        <body>
            <div className="admin-page">
                <Sidebar/>
                <div className="contenedor-padre">
                    <div className="contenedor-hijo">
                        <RoundRobinCard/>
                        <PersonalizedRoundRobinCard/>
                    </div>
                    <div className="contenedor-hijo">
                        <NewPermissionCard/>
                        <AllPermissionsCard/>
                    </div>
                    <div className="contenedor-hijo">
                        <NewStadiumCard/>
                        <AllStadiumsCard/>
                    </div>

                   
                </div>
            </div>
        </body>
        
    )
}