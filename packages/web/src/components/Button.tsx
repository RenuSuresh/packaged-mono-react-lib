import styled from "styled-components";
import React from "react";

interface StyledButtonProps {
	primary: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
	background-color: ${({ primary }) => (primary ? "blue" : "green")};
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

interface ButtonProps {
	label: string;
	primary: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, primary }) => (
	<StyledButton primary={primary}>{label}</StyledButton>
);
