import Stack from '../components/Stack';

export default {
	title: 'Components/Stack',
	component: Stack,
	argTypes: {
		// arguments that are only required by storybook, nowhere else in the code
		numberOfChildren: { type: 'number', defaultValue: 4 },
	},
	tags: ['autodocs'],
};

const Template = ({ numberOfChildren, ...args }) => (
	// pass all other arguments to stack; extract the numberOfChildren
	<Stack {...args}>
		{[...Array(numberOfChildren).keys()].map((
			n // key gives index for array items
		) => (
			<div
				style={{
					width: '50px',
					height: '50px',
					backgroundColor: 'lightblue',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{/* zero-based, but prefer to start count at 1 */}
				{n + 1}
			</div>
		))}
	</Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
	direction: 'row',
	spacing: 2,
	wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
	direction: 'column',
	spacing: 2,
	wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
	direction: 'row',
	spacing: 0,
	wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
	numberOfChildren: 40,
	direction: 'row',
	spacing: 2,
	wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
	numberOfChildren: 0,
	direction: 'row',
	spacing: 2,
	wrap: false,
};
