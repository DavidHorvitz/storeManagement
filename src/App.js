import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './action/getData';
import { Link, Route, Routes } from 'react-router-dom';

const App = props => {
  useEffect(() => {
    props.getAllProducts();
  }, [])
  return (
    <div className="App">
      <Link to="/products">Products</Link>
      <br />
      <Link to="/home-page">Home Page</Link>

      <Routes>
        <Route path="products" element={<Layout />} />
        <Route path="home-page" element={<div>My Home Page!!!</div>} />
      </Routes>

    </div>
  );
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, { getAllProducts })(App);
