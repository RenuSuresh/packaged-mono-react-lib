import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps {
	label: string;
	primary: boolean;
}

export const ButtonV1: React.FC<ButtonProps> = ({ label, primary }) => (
	<StyledButton primary={primary}>{label}</StyledButton>
);
