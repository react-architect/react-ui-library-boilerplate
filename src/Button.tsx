import React from 'react';
import styled from 'styled-components';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The text inside the button */
    text: String
}

const StyledButton = styled.button<IButtonProps>`
    color: yellow;
    background: black;
`;

export const Button = (props: IButtonProps) => <StyledButton {...props}>{props.text}</StyledButton>;