import { SelectOption } from './SelectOption';

export default {
  title: 'SelectOption',
  component: SelectOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <SelectOption {...arg} />;

export const Default = Template.bind({});
Default.args = {};
