import React from 'react';
import { EmojiButton } from '../components/EmojiButton';

export default {
	component: EmojiButton,
	title: 'Separate_group / Emoji Button',
	tags: ['autodocs'],
};

export const WithArgs = args => <EmojiButton {...args} />;
WithArgs.args = { label: 'With args' };
// export const Basic = () => <EmojiButton label='Click me' />;
