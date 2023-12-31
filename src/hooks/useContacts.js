import { useSelector } from 'react-redux';

import {
  selectContactsIsLoading,
  selectContactsList,
  selectContactsStatus,
  selectContactsError,
} from 'redux/contacts';

export const useContacts = () => {
  return {
    contactsIsLoading: useSelector(selectContactsIsLoading),
    contactsList: useSelector(selectContactsList),
    contactsStatus: useSelector(selectContactsStatus),
    contactsError: useSelector(selectContactsError),
  };
};
