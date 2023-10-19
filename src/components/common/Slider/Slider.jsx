import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

import { Button } from '../Button';
import left from '../../../images/Slider/arrow-left.svg';
import right from '../../../images/Slider/arrow-right.svg';
import './Slider.scss';

/**
 * Компонент слайдера.
 * Используется для создания интерактивных слайдеров.
 */
export const Slider = ({
  slides,
  variant = 'cards',
  slidesPerView = 3,
  width = '80%',
}) => {
  let swiperInstance = null;

  const goNext = () => {
    console.log('Going to next slide');
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    console.log('Going to previous slide');
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleSwiper = (swiper) => {
    swiperInstance = swiper;
    console.log('Swiper instance:', swiperInstance);
  };

  const pagination = variant === 'images' ? { clickable: true } : false;

  return (
    <div className={'slider' + ` slider_variant_${variant}`} style={{ width }}>
      <Button variant='square' onClick={goPrev}>
        <img src={left} alt='Листать влево' />
      </Button>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={pagination}
        loop={true}
        onSwiper={handleSwiper}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <Button variant='square' onClick={goNext}>
        <img src={right} alt='Листать вправо' />
      </Button>
    </div>
  );
};

Slider.propTypes = {
  /**
   * Массив слайдов
   */
  slides: PropTypes.array,
  /**
   * Вариант внешнего вида слайдера
   */
  variant: PropTypes.oneOf(['cards', 'images']),
  /**
   * Число слайдов, показывающихся за раз
   */
  slidesPerView: PropTypes.oneOf([1, 2, 3]),
  /**
   * Ширина слайдера
   */
  width: PropTypes.string,
};

Slider.defaultProps = {
  variant: 'cards',
  slidesPerView: 3,
  width: '80%',
};
