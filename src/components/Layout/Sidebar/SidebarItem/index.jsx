import PropTypes from 'prop-types';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function SidebarItem({ Icon, text, isWide = true, onClick }) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      {isWide && <ListItemText primary={text} />}
    </ListItemButton>
  );
}

SidebarItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  isWide: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default SidebarItem;
