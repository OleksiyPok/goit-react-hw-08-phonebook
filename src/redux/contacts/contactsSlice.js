import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './contactsInitialState';
import {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} from './contactsOperations';

import {
  handleGetContacts,
  handleAddContact,
  handleUpdateContact,
  handleDeleteContact,
  handlePending,
  handleRejected,
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

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
