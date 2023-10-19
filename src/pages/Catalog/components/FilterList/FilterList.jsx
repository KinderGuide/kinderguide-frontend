import React from 'react';
import { Button } from '../../../../components/common/Button';
import { InputCheckbox } from '../../../../components/InputCheckbox';
import { FILTER_ITEMS, METRO_LIST } from '../../../../utils/filterData';
import { DoubleRange } from './components/DoubleRange';
import { SelectOption } from './components/SelectOption/SelectOption';
import { Filter } from '../Filter/Filter';
import './FilterList.scss';

export function FilterList({
  handleSubmit,
  handleReset,
  filter,
  checkboxHandler,
  rangeHandler,
  selectHandler,
}) {
  return (
    <aside className='filter'>
      <h2 className='filter__title'>Фильтр</h2>
      <form name='filter' className='filter-form' onSubmit={handleSubmit}>
        {FILTER_ITEMS.map((block, index) => {
          return (
            <div key={index} className='filter-wrapper'>
              <Filter
                title={block.title}
                variant={`${block.type === 'checkbox' ? 'checkbox' : 'select'}`}
                onClick={(setIsOpen, isOpen) => {
                  setIsOpen(!isOpen);
                }}
              >
                {block.type === 'checkbox' ? (
                  block.items.map((item, index) => {
                    return (
                      <li key={index} className='filter__list-item'>
                        <InputCheckbox
                          labelName={item}
                          name={block.category + index}
                          type={block.type}
                          variant='filter'
                          isChecked={filter[block.category].includes(item)}
                          onChange={() => checkboxHandler(block.category, item)}
                        />
                      </li>
                    );
                  })
                ) : block.type === 'range' ? (
                  <li key={index} className='filter__list-range'>
                    <DoubleRange
                      min={0}
                      max={10000000}
                      value={filter.price}
                      onChange={(value) => rangeHandler(value)}
                    />
                  </li>
                ) : (
                  <li key={index} className='filter__list-select'>
                    <SelectOption
                      options={METRO_LIST}
                      value={filter.metro}
                      onChange={(o) => {
                        selectHandler(block.category, o);
                      }}
                    />
                  </li>
                )}
              </Filter>
            </div>
          );
        })}
        <div className='filter__buttons'>
          <Button
            type='submit'
            width='100%'
            size='medium'
            onSubmit={handleSubmit}
          >
            Применить
          </Button>
          <Button
            type='button'
            width='100%'
            size='medium'
            color='orange-empty'
            onClick={handleReset}
          >
            Сбросить
          </Button>
        </div>
      </form>
    </aside>
  );
}
