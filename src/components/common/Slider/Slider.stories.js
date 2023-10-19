import { exampleSlides } from '../../../utils/exampleData';
import { Slider } from './Slider';

export default {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <Slider {...arg} />;

export const Default = Template.bind({});
Default.args = {
  slides: exampleSlides,
  width: '1000px',
};

export const SingleSlider = Template.bind({});
SingleSlider.args = {
  slides: exampleSlides,
  slidesPerView: 1,
  width: '400px',
};
