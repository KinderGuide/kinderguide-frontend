import './SearchForm.scss';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import Search from '../../images/SearchForm/Search.svg';
import { memo } from 'react';

export const SearchForm = memo(function SearchForm({
  value,
  onChange,
  onSubmit,
}) {
  return (
    <form name='search' className='search' onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        variant='search'
        placeholder='Поиск'
        isValid='true'
      />
      <div className='search__searchIcon'>
        <Button variant='link' size='small' type='submit'>
          <img className='search__searchImg' src={Search} alt='search' />
        </Button>
      </div>
    </form>
  );
});
