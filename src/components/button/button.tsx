import { Link } from "gatsby";
import React, { MouseEventHandler } from "react";
import "./button.scss";

export enum ButtonMode {
    Default = 'default',
    Link = 'link',
    White = 'white'
}

interface IButtonProps {
    mode?: ButtonMode;
    isActive?: boolean;
    to?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({ children, mode = ButtonMode.Default, isActive = false, onClick, to, ...rest }) => {
    const classes: string[] = ['btn', mode];
    if (isActive) classes.push('active')

    const Tag = to ? Link : 'button';
    const props: any = to ? { to } : { onClick, type: 'button' };

    return (
        <Tag
            className={classes.join(' ')}
            {...props}
            {...rest}>
            {children}
        </Tag>
    );
}

export default Button;