import { useSelector } from 'react-redux';

import {
  selectFilterKey,
  selectFilteredContacts,
  selectFilteredAmount,
} from 'redux/filter/filterSelectors';

export const useFilter = () => {
  return {
    filterKey: useSelector(selectFilterKey),
    filteredContacts: useSelector(selectFilteredContacts),
    filteredAmount: useSelector(selectFilteredAmount),
  };
};
