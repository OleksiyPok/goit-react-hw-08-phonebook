// import { createSelector } from '@reduxjs/toolkit';

// export const selectAuthIsLoading = state => state.auth.isLoading;
// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectToken = state => state.auth.token;
// export const selectCurrent = state => state.auth.current;
// export const selectError = state => state.auth.error;

// export const selectsContactsIsLoading = state => state.contacts.isLoading;
// export const selectContactsList = state => state.contacts.contactsList;
// export const selectFilterKey = state => state.filter.filterKey;

// export const selectFilteredContacts = createSelector(
//   [selectContactsList, selectFilterKey],
//   (contactsList, filterKey) => {
//     if (!contactsList) return;

//     const filteredContacts = contactsList.filter(person => {
//       return person.name.toLowerCase().includes(filterKey);
//     });

//     filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

//     return filteredContacts;
//   }
// );
