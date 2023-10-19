import { Sort } from './Sort';

export default {
  title: 'Sort',
  component: Sort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <Sort {...arg} />;

export const Default = Template.bind({});
Default.args = {};
