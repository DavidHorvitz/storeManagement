import './App.css';
import Layout from './components/Product/Product';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './action/getData';



const App = props => {
  useEffect(() => {
    props.getAllProducts();
  }, [])
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, { getAllProducts })(App);
