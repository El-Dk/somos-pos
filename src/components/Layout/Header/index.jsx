import Logo from './Logo';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

const styles = { backgroundColor: 'red', width: '100%', height: '100%' };

function Header({ title }) {
  return (<Container sx={styles}>{Logo && <Logo />}{title}</Container>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
