import './Activity.scss';

export const Activity = ({ text, type }) => {
  return (
    <p className='activity'>
      <span className='activity__type'>{type}:</span> {text}
    </p>
  );
};
