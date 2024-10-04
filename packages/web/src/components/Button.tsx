import React from "react";
import { ButtonV1 } from "../../../../libs/components/Button/Button";
interface ButtonProps {
	label: string;
	primary: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, primary }) => (
	<ButtonV1 primary={primary} label={label} />
);
