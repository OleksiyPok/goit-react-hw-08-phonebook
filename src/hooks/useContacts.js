import { useSelector } from 'react-redux';

import {
  selectContactsIsLoading,
  selectContactsList,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  return {
    contactsIsLoading: useSelector(selectContactsIsLoading),
    contactsList: useSelector(selectContactsList),
  };
};
