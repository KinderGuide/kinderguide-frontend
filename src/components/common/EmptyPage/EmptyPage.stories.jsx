import { EmptyPage } from './EmptyPage';

export default {
  title: 'EmptyPage',
  component: EmptyPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <EmptyPage {...arg} />;

export const Default = Template.bind({});
Default.args = {
  title: 'К сожалению, в этом разделе пусто',
  text: 'В ближайшее время мы обязательно добавим информацию',
};
