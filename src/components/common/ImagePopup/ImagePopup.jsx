import { Popup } from '../Popup';

export function ImagePopup({ image }) {
  const checkImage = image !== '';

  return (
    <Popup isOpen={image} name='image'>
      <img
        className='popup__image'
        src={checkImage ? image : '#'}
        alt='картинка'
      />
    </Popup>
  );
}
