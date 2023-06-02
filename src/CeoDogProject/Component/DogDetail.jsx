import axios from "axios";
import React, { useState, useEffect } from "react";

const DogDetail = ({ data }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const imagePromises = data.map(async (breed) => {
          const response = await axios.get(
            `https://dog.ceo/api/breed/${breed}/images/random`
          );
          return response.data.message;
        });

        const imageData = await Promise.all(imagePromises);
        setImages(imageData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageData();
  }, [data]);

  console.log(images);

  return (
    <div>
      {data?.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src={images[index]} className="card-img-top" alt="..." />
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
      ))}
    </div>
  );
};

export default DogDetail;
