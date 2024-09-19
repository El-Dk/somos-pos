import Logo from './Logo';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

function Header({ title = 'Header' }) {
  return (<Container>{Logo && <Logo />}{title}</Container>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
