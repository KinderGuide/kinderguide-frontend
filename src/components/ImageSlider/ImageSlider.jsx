import PropTypes from 'prop-types';

import { Slider } from '../common/Slider/Slider';
import './ImageSlider.scss';

/**
 * Компонент слайдера c изображениями.
 * Используется для создания интерактивных слайдеров для фото.
 */
export const ImageSlider = ({ images, width = '50%' }) => {
  const slides = images?.map((image) => (
    <img
      className='slider-img'
      // src={image.image}
      src={`https://kinder.acceleratorpracticum.ru${image.image}`}
      alt='Фото организации'
    />
  ));

  return (
    <Slider variant='images' slides={slides} slidesPerView={1} width={width} />
  );
};

ImageSlider.propTypes = {
  /**
   * Массив изображений
   */
  images: PropTypes.array,
  /**
   * Ширина слайдера
   */
  width: PropTypes.string,
};

ImageSlider.defaultProps = {
  width: '50%',
};
