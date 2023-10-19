import { DoubleRange } from './DoubleRange';

export default {
  title: 'DoubleRange',
  component: DoubleRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <DoubleRange {...arg} />;

export const Default = Template.bind({});
Default.args = {};
