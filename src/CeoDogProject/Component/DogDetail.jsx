//import axios from "axios";
import React from "react";
//import { useState, useEffect } from "react";

const DogDetail = ({ data }) => {
  // const dataArray = Object.keys(data);
  // console.log(dataArray);
  return data?.map((item, index) => {
    return (
      <div className="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
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
          <a href="#" class="btn btn-primary">
            Another link
          </a>
        </div>
      </div>
    );
  });
};

export default DogDetail;
