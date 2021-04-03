import { fetchFilter } from "./redux/action/index";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import './App.css';
const RestaurantFilter = ({ allItems, fetchFilter }) => {
    const [inputData, setinputData] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        fetchFilter(filter);
      }, [filter]);
      console.log("Hii",allItems);
    const handleChange = (e) => {
      const temp = [...e.target.value];
        setinputData(temp.map((val) => val.value));
      };
      console.log("input",inputData)
      const handleClick = () => {
        var tempD = [];
        inputData.map((res) => {
          allItems.cuisineData.map(
            (res1) =>
              res === res1.name ? (tempD = [...tempD, ...res1.restaurants]) : null
          );
        });
        var tempSet = new Set(tempD);
        console.log(...tempSet);
        setFilter(tempSet);
      };
      console.log("filter",filter)

  return (
    <div>
    <select onChange={(e) => handleChange(e)} id='frm'>
      <option value="Chinese">Chinese</option>
      <option  value="Indian">Indian</option>
      <option  value="Thai" >Thai</option>
      <option  value="Greek">Greek</option>
      <option  value="Vietnamese">Vietnamese</option>
      <option value="French">French</option>
    </select>
    <button onClick={handleClick}>Filter</button>
      <div>
        {allItems.filterRestData.length === 0
          ? allItems.restaurantData.map((val, index) => (
              <div key={val.id} >
                <p>{val.name}</p>
              </div>
            ))
          : allItems.filterRestData.map((val, index) => (
              <div >
                <p>{val.name}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state.data",state.data);
  return {
    allItems: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilter: (filterData) => dispatch(fetchFilter(filterData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFilter);
