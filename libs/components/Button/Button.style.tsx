import styled from "styled-components";
interface StyledButtonProps {
	primary: boolean;
}
export const StyledButton = styled.button<StyledButtonProps>`
	background-color: ${({ primary }) => (primary ? "blue" : "green")};
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;
