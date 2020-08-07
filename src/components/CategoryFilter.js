import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { categories } = props;
  return (
    <select>
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
};

export default CategoryFilter;
