import React from 'react';
import './Button.css';

const styles = [
    'btn--primary',
    'btn--outline',

]

const sizes = [
    'btn--medium',
    'btn--large',
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]

    const checkButtonSizes = sizes.includes(buttonSize) ? buttonSize : sizes[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSizes}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}