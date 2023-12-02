export const handleGetContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactsList = payload;
};

export const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactsList.push(payload);
};

export const handleUpdateContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.contactsList = state.contactsList.filter(
    person => person.id !== payload.id
  );
  state.contactsList.push(payload);
};

export const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.contactsList = state.contactsList.filter(
    person => person.id !== payload.id
  );
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
