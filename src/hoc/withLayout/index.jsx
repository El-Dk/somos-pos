import Layout from '../../components/Layout';

function withLayout(Content, { title }) {
  return function HOC() {return (
    <Layout Content={Content} title={title} />
  );}
}

export default withLayout;
