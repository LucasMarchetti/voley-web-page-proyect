import React from "react";
import RoundRobinCard from "./RoundRobinCard";
import TorneosFinalizados from "./TorneosFinalizados";
import NewTeamCard from "./NewTeamCard";
import AllTeamsCard from "./AllTeamsCard";
import NewStadiumCard from "./NewStadiumCard";
import AllStadiumsCard from "./AllStadiumsCard";
import NewPermissionCard from "./NewPermissionCard";
import AllPermissionsCard from "./AllPermissionsCard";
import PersonalizedTournamentCard from "./PersonalizedTournamentCard";
import NewCategoryCard from "./NewCategoryCard";
import AllCategorysCard from "./AllCategorysCard";
import PersonalizedPermissionCard from "./PersonalizedPermissionCard";

import './styles/Box.css';

const Box = ({ activeTab }) => {
  if (activeTab === "torneos") {
    return (
      <div className="box">
        <div className="contenedor-hijo">
          <RoundRobinCard />
          <TorneosFinalizados />
        </div>
        <div className="contenedor-hijo">
          <div className="contenedor-relleno-m"></div>
          <div className="contenedor-relleno-c"></div>
        </div>
        <div className="contenedor-hijo">
          <PersonalizedTournamentCard/>
          <div className="contenedor-relleno-gxs"></div>
        </div>
      </div>
    );
  } else if (activeTab === "gestion") {
    return (
      <div className="box">
        <div className="contenedor-hijo">
          <NewTeamCard />
          <AllTeamsCard />
        </div>
        <div className="contenedor-hijo">
          <NewCategoryCard/>
          <AllCategorysCard/>
        </div>
        <div className="contenedor-hijo">
          <NewStadiumCard />
          <AllStadiumsCard />
        </div>
      </div>
    );
  } else if (activeTab === "permisos") {
    return (
      <div className="box">
        <div className="contenedor-hijo">
          <div className="contenedor-relleno-m"></div>
          <div className="contenedor-relleno-c"></div>
        </div>
        <div className="contenedor-hijo">
          <NewPermissionCard />
          <AllPermissionsCard />
        </div>
        <div className="contenedor-hijo">
          <PersonalizedPermissionCard/>
        </div>
      </div>
    );
  } else {
    return null; // Manejo de caso por defecto
  }
};

export default Box;