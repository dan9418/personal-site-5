import React from "react";
import ICON from "../../assets/icons";
import "./icon.scss";

const Icon: React.FC<any> = ({ id }) => {
    return (
        ICON[id] || null
    );
}

export default Icon;