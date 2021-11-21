import React from "react";
import { buttonModule } from "./button.module.scss"

const Button: React.FC = ({ children, ...rest }) => {
    return <button type="button" className={buttonModule} {...rest}>{children}</button>
}

export default Button;