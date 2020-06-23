import React from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jilljiohnson@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Protogene uwi',
        email: 'jilljiohnson@gmail.com',
        phone: '888-111-1111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'George Johnson',
        email: 'george@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 4,
        name: 'John Doe',
        email: 'jill@gmail.com',
        phone: '555-111-1111',
        type: 'personal',
      },
      {
        id: 5,
        name: 'Jill John',
        email: 'jiohnson@gmail.com',
        phone: '222-111-2222',
        type: 'personal',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact

  // Delete COntact

  // set current contact

  // clear current contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
