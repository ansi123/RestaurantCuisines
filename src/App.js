import './App.css';
import RestaurantFilter from './RestaurantFilter';
import {fetchSuccess} from './redux/action/index';
import { connect } from "react-redux";
import React, { useEffect } from "react";

function App({fetchSuccess}) {
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

