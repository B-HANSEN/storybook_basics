import Light from '../components/Light';

export default {
	title: 'Other_section/Light', // setup trees to group components
	component: Light,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			// control: { type: 'radio' }, // limit options in Storybook with radio buttons...
			control: { type: 'select' }, // ... or a select options
			options: ['green', 'yellow', 'red'],
		},
	},
};

const Template = args => <Light {...args} />;

export const Base = Template.bind({});

export const Yellow = Template.bind({});
Yellow.args = {
	variant: 'yellow',
};

export const Red = Template.bind({});
Red.args = {
	variant: 'red',
};

/** this is a custom description for the docs */
export const TrafficLight = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
				border: '3px solid black',
				width: 'max-content',
				padding: 10,
			}}
		>
			<Light variant='red' />
			<Light variant='yellow' />
			<Light variant='green' />
		</div>
	);
};
