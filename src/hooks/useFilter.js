import { useSelector } from 'react-redux';

import { selectFilterKey } from 'redux/filter/filterSelectors';

export const useFilter = () => {
  return { filterKey: useSelector(selectFilterKey) };
};
