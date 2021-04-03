import './App.css';
import RestaurantFilter from './RestaurantFilter';
import {fetchSuccess} from './redux/action/index';
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetchSuccess();
  }, []);
  return (
    <div className="App">
      <RestaurantFilter/>
    </div>
  );
}

const mapDispatchStatetoProps = (dispatch) => {
  return {
    fetchSuccess: () => dispatch(fetchSuccess()),
  };
};

export default connect(null, mapDispatchStatetoProps)(App);

