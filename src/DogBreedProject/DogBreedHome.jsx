import React from "react";
import SearchBar from "./Components/SearchBar";
import BreedDetail from "./Components/BreedDetail";
import RandomBreed from "./Components/RandomBreed";
//import Header from "./Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const DogBreedHome = () => {
  const [search, setSearch] = useState("");
  const [breedDetail, setBreedDetail] = useState([]);
  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: "https://api.thecatapi.com/v1/breeds?limit=10&page=0",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // axios(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //const response = await axios(config).get(``)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://api.thedogapi.com/v1/breeds?limit=10&page=0",
          headers: {
            "Content-Type": "application/json",
            "x-api-key":
              "live_oDYeDNq0ZWq2MO7cxoO1s9NM8zdSZ79C1irDW6aet5N2qGV0D1iqEIkGuap6LW9z",
          },
        };

        const response = await axios(config);
        console.log(response.data);

        setBreedDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {/* <Header></Header> */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          data={breedDetail}
          setBreedDetail={setBreedDetail}
        ></SearchBar>
        <BreedDetail data={breedDetail}></BreedDetail>
        <RandomBreed>Random Breed</RandomBreed>
      </div>
    </div>
  );
};

export default DogBreedHome;
