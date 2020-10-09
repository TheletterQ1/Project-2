import React, { useState, useEffect } from "react";
import TheHomes from "./Listings";
import Form from "./Form";
import "./App.css";
// import { Switch, Route, Link } from "react-router-dom";
import aboutMe from "./About";
import Searches from "./Search";
import showSearch from "./List";
import Nav from "./Nav";

export default function App() {
  const [houses, setHouses] = useState({});
  
                                                                                     //{city}      //limit                      //{state}
  const url = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=10&offset=0&state_code=NY&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;

  //const newURL = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${FormData.city}&limit=${FormData.results}&offset=0&state_code=${FormData.state}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;

  function Houses() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHouses(data);
      });
  }

  useEffect(() => {
    Houses();
  }, []);
  // // making new fetch

  // console.log(searched)

  //    console.log(houses);
  // const data = response.json();
  // const houses = {data}
  // this.setHouses({data})

  //  handleClick = //for clicking on the homes
  const handleClick = (newURL) => {
    fetch(newURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setHouses(data);
    });

  };
  // function grabHouse(element, index) {
  //   let grabIt = handleClick.userClicked ? fetch(element.rdc_web_url) : null;
  //   console.log(grabIt);
  //   const handleClickHouse = (elem, target) => {
  //     const clickedIt = handleClick(() => grabHouse(grabIt));
  //     console.log(grabHouse);
  //   };
  // }
  // grabHouse();


  //to handle input changes

  return (
    <>
      <div className="App">
        <header>
          <Nav />
          <Form 
          handleClick={(event)=>handleClick(event)}/> 
          {/* <h1 className="welcome">Welcome to Inner Circle Real Estate</h1>
          <h2>Acquiring properties has never been so easy!</h2>
          <h3>Enter Desired Area Details To Begin</h3>
         </header>
      </div>
      <Form />
      {/* <div className='Form'> <Form /> */}
      {/* {formData.city ? <newURL } */}
      {/* </div> */}
      </header>
      <main>
        <div onClick={handleClick} id="wrapper">
          <div id="thumbnails">
            <TheHomes houses={houses} />
          </div>
        </div>
        
          {/* <div id='search-wrapper'>
          <div id = 'search-thumbnails'>
            <Form 
            captureData={captureData}
            /> 
          </div>
          </div>  */}
           

      </main>
      </div>
    </>
  );
}
