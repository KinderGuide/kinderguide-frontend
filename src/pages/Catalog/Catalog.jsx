import React, { useDeferredValue, useEffect, useState } from 'react';
import { Sort } from './components/Sort';
import { NAV_CATEGORY } from '../../utils/filterData';
import './Catalog.scss';
import { FilterList } from './components/FilterList/FilterList';
import { ShowList } from '../../components/ShowList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFilteredDataQuery } from '../../api/filterApi';
import {
  setCategoryFilter,
  setRequestFilter,
  setSortFilter,
  setSortDirectionFilter,
  setCheckboxFilter,
  setFilterDefault,
} from '../../store/filterSlice';

export function Catalog() {
  const [selected, setSelected] = useState('school');
  const [paramsUrl, setParamsUrl] = useState('');

  const { filter } = useSelector((state) => state);
  const deferredFilter = useDeferredValue(filter);
  const dispatch = useDispatch();

  const { initialCards = [] } = useGetFilteredDataQuery([
    deferredFilter.category,
    paramsUrl,
  ]);

  useEffect(() => {
    filteredDataHandler(deferredFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickNavHandler = (e) => {
    dispatch(setFilterDefault());
    setSelected(e.target.id);
    dispatch(setCategoryFilter(e.target.id));
    filteredDataHandler(deferredFilter);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    filteredDataHandler(deferredFilter);
  };

  const checkboxHandler = (key, value) => {
    dispatch(setCheckboxFilter({ key, value }));
  };

  const sortHandler = (btnId) => {
    dispatch(setSortFilter(btnId));
  };

  const sortDirectionHandler = () => {
    dispatch(setSortDirectionFilter());
  };

  const searchHandler = (e) => {
    dispatch(setRequestFilter(e.target.value));
  };

  const handleReset = () => {
    dispatch(setFilterDefault());
  };

  function filteredDataHandler(sort) {
    const params = new URLSearchParams();
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
  }

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
            value={deferredFilter.request}
            onSubmit={handleSubmit}
          />
          <Sort
            sortHandler={sortHandler}
            sortDirectionHandler={sortDirectionHandler}
          />
        </div>
        <FilterList
          handleSubmit={handleSubmit}
          filter={deferredFilter}
          checkboxHandler={checkboxHandler}
          selectHandler={checkboxHandler}
          handleReset={handleReset}
        />
        <ShowList selected={selected} />
      </div>
    </section>
  );
}
