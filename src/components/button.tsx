import React from "react";
import * as buttonStyles from "./_button.module.scss"

const Button: React.FC = ({ children, ...rest }) => {
    return <button type="button" className={buttonStyles} {...rest}>{children}</button>
}

export default Button;