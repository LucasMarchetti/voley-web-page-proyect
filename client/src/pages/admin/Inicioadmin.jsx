import CategorySelect from "../../components/admin/CategorySelect";
import Sidebar from "../../components/admin/Sidebar";
import RoundRobinCard from "../../components/admin/RoundRobinCard";
import PersonalizedRoundRobinCard from "../../components/admin/PersonalizedRoundRobinCard";
import "./styles.css"

export default function federacionCatamarca () {

    return (
        <div className="admin-page">
            <Sidebar/>
            <RoundRobinCard/>
            <PersonalizedRoundRobinCard/>
        </div>
    )
}