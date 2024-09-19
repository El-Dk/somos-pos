import PropTypes from 'prop-types';
import Header from './Header';
import { Container } from '@mui/material';

function Layout({ Content, title }) {
  return (
    <Container>
      <Header title={title} />
      <Content />
    </Container>
  );
}

Layout.propTypes = {
  Content: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired
};

export default Layout;
