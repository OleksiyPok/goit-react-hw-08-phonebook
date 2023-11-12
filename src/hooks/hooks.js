import { useSelector } from 'react-redux';
import {
  selectAuthIsLoading,
  selectIsLoggedIn,
  selectToken,
  selectCurrent,
  selectError,
  selectsContactsIsLoading,
  selectContactsList,
  selectFilterKey,
} from 'redux/selectors';

export const useAuth = () => {
  return {
    authIsLoading: useSelector(selectAuthIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
    token: useSelector(selectToken),
    current: useSelector(selectCurrent),
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
