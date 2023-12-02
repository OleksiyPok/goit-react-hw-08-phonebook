export const handleGetContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactsList = payload;

  // console.log('Get contact fulfilled'); //develop
  // console.log(''); //develop
};

export const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactsList.push(payload);

  // console.log('Add contact fulfilled'); //develop
  // console.log(''); //develop
};

export const handleUpdateContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.contactsList = state.contactsList.filter(
    person => person.id !== payload.id
  );
  state.contactsList.push(payload);

  // console.log('Update contact fulfilled'); //develop
  // console.log(''); //develop
};

export const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.contactsList = state.contactsList.filter(
    person => person.id !== payload.id
  );

  // console.log('Delete contact fulfilled'); //develop
  // console.log(''); //develop
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;

  // console.log('Contacts pending'); //develop
  // console.log(''); //develop
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;

  // console.log('Contacts rejected'); //develop
  // console.log(''); //develop
};
