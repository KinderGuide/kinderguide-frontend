import { Filter } from './Filter';

export default {
  title: 'Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <Filter {...arg} />;

export const Default = Template.bind({});
Default.args = {};
