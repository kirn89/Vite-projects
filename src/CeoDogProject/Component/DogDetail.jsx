import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const DogDetail = ({ data }) => {
  // const dataArray = Object.keys(data);
  // console.log(dataArray);
  const [currentBreed, setCurrentBreed] = useState("");

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
  console.log(currentBreed);
  return data?.map((item, index) => {
    setCurrentBreed(() => item);
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Card link
          </a>
          <a href="#" className="btn btn-primary">
            Another link
          </a>
        </div>
      </div>
    );
  });
};

export default DogDetail;
