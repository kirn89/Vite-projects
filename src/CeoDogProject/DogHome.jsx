import React from "react";
import Header from "./Component/Header";
import SearchBar from "./Component/SearchBar";
import DogDetail from "./Component/DogDetail";
import { useState, useEffect } from "react";
import axios from "axios";

const DogHome = () => {
  const [dogDetail, setDogDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.all([
          axios.get("https://dog.ceo/api/breeds/list/all"),
          axios.get("https://dog.ceo/api/breeds/image/random"),
        ]);

        console.log(response[0].data);
        //const message = response[0].data.message;
        // const arrayBreed = Object.keys(message);
        // console.log(arrayBreed);
        setDogDetail(response[0].data);
        console.log(dogDetail);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header>Header</Header>
      <SearchBar>Search Bar</SearchBar>
      <DogDetail data={dogDetail}></DogDetail>
    </div>
  );
};

export default DogHome;
