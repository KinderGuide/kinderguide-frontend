import './AddMoreButton.module.scss';
import { Button } from '../common/Button';
import React from 'react';

export const AddMoreButton = ({
  cards,
  count,
  displayedCards,
  setDisplayedCards,
}) => {
  function addMoreCards() {
    setDisplayedCards(displayedCards + count);
  }

  return (
    <>
      {displayedCards < cards.length ? (
        <div className='feedback__container-for-button'>
          <Button
            variant='square'
            color='empty'
            size='medium'
            type='button'
            children='Показать еще'
            width='298px'
            onClick={addMoreCards}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};
