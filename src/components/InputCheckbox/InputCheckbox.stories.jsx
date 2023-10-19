import { InputCheckbox } from './InputCheckbox';

export default {
  title: 'InputCheckbox',
  component: InputCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <InputCheckbox {...arg} />;

export const Default = Template.bind({});
Default.args = {};
