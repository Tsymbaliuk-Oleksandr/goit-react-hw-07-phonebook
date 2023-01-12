import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/contactOperations';
// import { nanoid } from 'nanoid';
import { getContacts, getLoadingStatus } from 'redux/contactSelectors';
import { Box } from 'components/Box';
import { Input, Title } from './ContactForm.styled';
import Button from 'components/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const allContactNames = contacts.map(contact => contact.name);

  const checkDuplicates = name => {
    if (allContactNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkDuplicates(name)) {
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      as="form"
    >
      <label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button type="submit">{isLoading ? 'Loading...' : 'Add contact'}</Button>
    </Box>
  );
};

export default ContactForm;
