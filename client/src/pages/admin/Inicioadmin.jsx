import CategorySelect from "../../components/admin/CategorySelect";
import Sidebar from "../../components/admin/Sidebar";
import Box from "../../components/admin/Box";
import React, { useState } from "react";

import "./styles.css"

export default function InicioAdmin () {
    const [activeTab, setActiveTab] = useState("torneos"); // Estado inicial
    return (
        <body className="body-admin">
            <div className="admin-page">
                <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
                <Box activeTab={activeTab} />
            </div>
        </body>
        
    )
}