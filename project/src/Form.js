import React, {useState, createContext,useEffect} from 'react';
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import App from './App';
import aboutMe from './About'
import Searches from './Search'
import showSearch from './List';
import theNav from './Nav';
import { render } from 'react-dom';


//props or state?????
// export const submittedContext =  createContext();    

export default function Form(props) {
  // const submittedContext =  createContext({formData});

  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userResults, setUserResults] = useState("");
  const [captureData, setCaptureData] = useState({});
  const [newURL, setNewUrl] = useState("");
  const formPage = 'this is form page';

  //to handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newURL = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${userCity}&limit=${userResults}&offset=0&state_code=${userState}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
   console.log(newURL)
   console.log(props)
    props.handleClick(newURL)
    // console.log(userCity, userResults, userState);
  };
  // function CaptureData() {
  //   setNewUrl(newURL)
  
  // useEffect(() => {
  //   CaptureData();
  // }, []);

  //to handle input changes

  const handleCityChange = (event) => {
    console.log("handleChange-", event.target.value);
    setUserCity(event.target.value);
  };
  const handleStateChange = (event) => {
    console.log("handleChange-", event.target.value);
    setUserState(event.target.value);
  };
  const handleResultsChange = (event) => {
    console.log("handleChange-", event.target.value);
    setUserResults(event.target.value);
  }; 
 
  // render(showList)
  return (
    <>
   
      <h2>{formPage}</h2>

      <form
        className="form"
        style={{ display: "column", justifyContent: "space-between" }}
      >
        <input
          onChange={handleCityChange}
          type="text"
          name="city"
          value={userCity}
          placeholder="City - ex: New York City"
        />
        <br />
        <br />
        <input
          type="text"
          name="state"
          onChange={handleStateChange}
          value={userState}
          placeholder=" State - ex: NY"
        />
        <br />
        <br />
        <input
          type="number"
          name="results"
          id="results"
          onChange={handleResultsChange}
          value={userResults}
          placeholder="how many properties?"
        />

        <input onClick={handleSubmit} type="submit" value="Search" />
      </form>

      {/* <main>
      <div id="search-wrapper">
          <div id="search-thumbnails">
            <showSearch captureData={captureData} />
          </div>
        </div>
      </main> */}
      {/* <footer>
        <div id="search-wrapper">
          <div id="search-thumbnails">
            <showSearch captureData={captureData} />
          </div>
        </div>
      </footer> */}
    </>
  );
}
    

