import React, { useCallback, useEffect, useState } from 'react';
import { Sort } from './components/Sort';
import { INITIAL_FILTER_STATE, NAV_CATEGORY } from '../../utils/filterData';
import './Catalog.scss';
import { FilterList } from './components/FilterList/FilterList';
import { ShowList } from '../../components/ShowList';
import { itemsData } from './itemsData'; // временные школы
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFilteredDataQuery } from '../../api/filterApi';
import {
  setCategoryFilter,
  setRequestFilter,
  setSortFilter,
  setSortDirectionFilter,
  setCheckboxFilter,
  setPriceFilter,
  setFilterDefault,
} from '../../store/filterSlice';

export function Catalog() {
  const [selected, setSelected] = useState('school');
  const [initialCards] = useState(itemsData);
  const [sortedCards, setSortedCards] = useState(itemsData);
  // const [filteredValues, setFilteredValues] = useState(INITIAL_FILTER_STATE);

  const { filter } = useSelector((state) => state);
  console.log(filter);
  const dispatch = useDispatch();

  const [paramsUrl, setParamsUrl] = useState('');
  // const [isChecked, setIsChecked] = useState(false);

  const {
    data = [],
    error,
    isLoading,
  } = useGetFilteredDataQuery([filter.category, paramsUrl]);

  useEffect(() => {
    filteredDataHandler(filter);
  }, []);

  const onClickNavHandler = (e) => {
    dispatch(setFilterDefault());
    setSelected(e.target.id);
    dispatch(setCategoryFilter(e.target.id));
    filteredDataHandler(filter);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    filteredDataHandler(filter);
  }

  function checkboxHandler(key, value) {
    dispatch(setCheckboxFilter({ key, value }));
  }

  function rangeHandler(value) {
    dispatch(setPriceFilter(value));
  }

  function sortHandler(btnId) {
    dispatch(setSortFilter(btnId));
  }

  function sortDirectionHandler() {
    dispatch(setSortDirectionFilter());
  }

  function searchHandler(e) {
    dispatch(setRequestFilter(e.target.value));
  }

  function handleReset() {
    setSortedCards(initialCards);
    dispatch(setFilterDefault());
  }

  function filteredDataHandler(sort) {
    const params = new URLSearchParams();
    const url = 'https://kinder.acceleratorpracticum.ru/api/v1/';
    for (const key in sort) {
      if (key === 'category') continue;
      if (typeof sort[key] === 'boolean') {
        params.append(key, sort[key]);
        continue;
      }
      if (!sort[key].length) continue;
      if (Array.isArray(sort[key])) {
        sort[key].forEach((value) => params.append(key, value));
        continue;
      }
      if (typeof sort[key] === 'object') {
        for (const item in sort[key]) {
          params.append(item, sort[key][item]);
        }
        continue;
      }
      params.append(key, sort[key]);
    }

    setParamsUrl(params.toString());

    console.log(url + params);
  }

  if (isLoading) return <h1>Идет загрузка...</h1>;

  return (
    <section className='catalog'>
      <nav className='catalog__nav'>
        {NAV_CATEGORY.map((item, index) => {
          return (
            <button
              id={item.category}
              type='button'
              key={index}
              className={`catalog__nav-item ${
                selected === item.category ? 'catalog__nav-item_selected' : ''
              }`}
              onClick={onClickNavHandler}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      <div className='list-wrapper'>
        <div className='search-wrapper'>
          <SearchForm
            onChange={searchHandler}
            value={filter.request}
            onSubmit={handleSubmit}
          />
          <Sort
            cards={initialCards}
            sortHandler={sortHandler}
            sortDirectionHandler={sortDirectionHandler}
          />
        </div>
        <FilterList
          handleSubmit={handleSubmit}
          filter={filter}
          checkboxHandler={checkboxHandler}
          selectHandler={checkboxHandler}
          rangeHandler={rangeHandler}
          handleReset={handleReset}
        />
        <ShowList cards={sortedCards} />
      </div>
    </section>
  );
}
