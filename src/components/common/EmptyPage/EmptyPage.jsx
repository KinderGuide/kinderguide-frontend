import PropTypes, { string } from 'prop-types';
import './EmptyPage.scss';

export function EmptyPage({
  title,
  text,
  size = 'small',
  color = 'blue',
  margin = 'medium',
  img,
  imgName,
  children,
}) {
  return (
    <section className='empty-page'>
      <h1
        className={`
        empty-page__title
        ${size ? `empty-page__title_size_${size}` : ''}
        ${color ? `empty-page__title_color_${color}` : ''}
        ${margin ? `empty-page__title_margin_${margin}` : ''}
        `}
      >
        {title}
      </h1>
      {text && <p className='empty-page__text'>{text}</p>}
      {img && <img className='empty-page__image' src={img} alt={imgName} />}
      {children}
    </section>
  );
}

EmptyPage.propTypes = {
  title: string,
  text: string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['blue', 'black']),
  margin: PropTypes.oneOf(['small', 'medium', 'large']),
  img: string,
  imgName: string,
  children: PropTypes.node,
};

EmptyPage.defaultProps = {
  title: '',
  text: '',
  size: 'small',
  color: 'blue',
  margin: 'small',
  img: '',
  imgName: '',
  children: '',
};
