import './SearchForm.scss';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import Search from '../../images/SearchForm/Search.svg';

export function SearchForm({ value, onChange, onSubmit }) {
  return (
    <form name='search' className='search' onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        variant='search'
        placeholder='Поиск'
      />
      <div className='search__searchIcon'>
        <Button variant='link' size='small' type='submit'>
          <img className='search__searchImg' src={Search} alt='search' />
        </Button>
      </div>
    </form>
  );
}
