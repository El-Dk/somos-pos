import Container from '@mui/material/Container';
import List from '@mui/material/List';
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

  }
};

function Sidebar({ items, handleArrowClick, isWide = true }) {

  return (
    <Container className='sidebar-container' sx={styles.container}>
      <List>
        {items.map(({ key, Icon, text }) => <SidebarItem Icon={Icon} text={text} key={key} isWide={isWide} onClick={() => {}} />)}
      </List>
      <List>
        {isWide
          ? <SidebarItem Icon={KeyboardDoubleArrowLeftIcon} text='Collapse' isWide={true} onClick={handleArrowClick} />
          : <SidebarItem Icon={KeyboardDoubleArrowRightIcon} text='' isWide={false} onClick={handleArrowClick} />
        }
      </List>
    </Container>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired
  })),
  handleArrowClick: PropTypes.func.isRequired,
  isWide: PropTypes.bool
};

export default Sidebar;
