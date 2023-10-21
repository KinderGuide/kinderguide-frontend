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
  setFilterAllData,
} from '../../store/filterSlice';
import { useLocation } from 'react-router-dom';

export function Catalog() {
  const { filter } = useSelector((state) => state, { noopCheck: 'never' });
  const deferredFilter = useDeferredValue(filter);

  const [selected, setSelected] = useState(filter.category);
  const [paramsUrl, setParamsUrl] = useState('');
  const path = useLocation().pathname;

  const dispatch = useDispatch();

  const { data = [], isLoading } = useGetFilteredDataQuery([
    filter.category,
    paramsUrl,
  ]);

  useEffect(() => {
    filteredDataHandler(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.sort, filter.sortDirection]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    const filterData = JSON.parse(localStorage.getItem('filter'));
    if (path === 'catalog' && filterData) {
      dispatch(setFilterAllData(filterData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const onClickNavHandler = (e) => {
    dispatch(setFilterDefault());
    setSelected(e.target.id);
    dispatch(setCategoryFilter(e.target.id));
    filteredDataHandler(filter);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    filteredDataHandler(filter);
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
        <ShowList
          data={data ? data.results : []}
          selected={selected.slice(0, -1)}
          category={deferredFilter.category}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
