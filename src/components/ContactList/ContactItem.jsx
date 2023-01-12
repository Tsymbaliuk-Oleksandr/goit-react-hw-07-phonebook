import Button from 'components/Button';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Name, Number } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone, deleteContact }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <div>
        <Name>{name}:</Name>
        <Number>{phone}</Number>
      </div>
      <Button type="button" handleFunc={() => deleteContact(id)}>
        Delete
      </Button>
    </Box>
  );
};

// export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
