import { useSelector } from 'react-redux';
import {
  selectAuthIsLoading,
  selectIsLoggedIn,
  selectToken,
  selectCurrent,
  selectIsRefrashing,
  selectError,
} from 'redux/auth/authSelectors';

import {
  selectsContactsIsLoading,
  selectContactsList,
  selectFilterKey,
} from 'redux/contacts/contactsSelectors';

export const useAuth = () => {
  return {
    authIsLoading: useSelector(selectAuthIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
    token: useSelector(selectToken),
    current: useSelector(selectCurrent),
    isRefrashing: useSelector(selectIsRefrashing),
    error: useSelector(selectError),
  };
};

export const useContacts = () => {
  return {
    contactsIsLoading: useSelector(selectsContactsIsLoading),
    contactsList: useSelector(selectContactsList),
    filterKey: useSelector(selectFilterKey),
  };
};
