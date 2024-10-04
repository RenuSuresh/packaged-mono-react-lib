import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../components/Button";

interface ButtonProps {
	primary: boolean;
	label: string;
}

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		primary: { control: "boolean" },
		label: { control: "text" },
	},
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => {
	return <Button {...args} />;
};
export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
	primary: false,
	label: "Secondary Button",
};
