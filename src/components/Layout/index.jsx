import { useState, useCallback } from 'react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
import sidebarItems from '../../routes/sidebarItems';

const styles = {
  outerContainer: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  headerContainer: {
    backgroundColor: 'pink',
    height: '5rem'
  },
  innerContainer: {
    backgroundColor: 'blue',
    height: 'calc(100vh - 5rem)',
    width: '100%',
    display: 'flex'
  },
  sidebarContainer: {
    backgroundColor: 'yellow',
    height: 'calc(100vh - 5rem)',
  },
  contentContainer: {
    backgroundColor: 'green'
  }
};

function Layout({ Content, title }) {
  const [isWide, setIsWide] = useState(true);
  const handleArrowClick = useCallback(() => setIsWide(!isWide), [isWide]);

  return (
    <Container className='layout-outer-container' sx={styles.outerContainer}>
      <Container className='layout-header-container' sx={styles.headerContainer}>
        <Header title={title} />
      </Container>
      <Container className='layout-inner-container' sx={styles.innerContainer}>
        <Container className='layout-sidebar-container' sx={{ ...styles.sidebarContainer, width: isWide ? '16rem' : '4rem'}}>
          <Sidebar items={sidebarItems} handleArrowClick={handleArrowClick} isWide={isWide} />
        </Container>
        <Container className='layout-content-container' sx={styles.contentContainer}>
          <Content />
        </Container>
      </Container>
    </Container>
  );
}

Layout.propTypes = {
  Content: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired
};

export default Layout;
