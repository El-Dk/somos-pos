import withLayout from '../../hoc/withLayout';

function Home() {
  return <span>Home</span>;
}

const HomeWithLayout = withLayout(Home, { title: 'Home Page' });

export default HomeWithLayout;
