import React from "react";
import "./button.scss";

const Button: React.FC = ({ children, ...rest }) => {
    return <button type="button" {...rest}>{children}</button>
}

export default Button;