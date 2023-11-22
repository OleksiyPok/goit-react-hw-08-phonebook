import { createSlice } from '@reduxjs/toolkit';

// import { authLogout } from 'redux/auth/authOperations';
import { contactsInitialState } from './contactsInitialState';
import {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} from './contactsOparations';

import {
  handleGetContacts,
  handleAddContact,
  handleUpdateContact,
  handleDeleteContact,
  handlePending,
  handleRejected,
  // handleFulfilledLogout,
} from './contactsSliceHendlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducer: {
    edit() {},
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleGetContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(updateContact.fulfilled, handleUpdateContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      // .addCase(authLogout.fulfilled, handleFulfilledLogout)

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
