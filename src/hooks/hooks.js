import { useSelector } from 'react-redux';

import {
  selectsContactsIsLoading,
  selectContactsList,
  selectFilterKey,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  return {
    contactsIsLoading: useSelector(selectsContactsIsLoading),
    contactsList: useSelector(selectContactsList),
    filterKey: useSelector(selectFilterKey),
  };
};
