import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { categories, changeFilter } = props;
  return (
    <select onChange={event => changeFilter(event.target.value)}>
      <option value="All">All</option>
      {categories.map(c => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
