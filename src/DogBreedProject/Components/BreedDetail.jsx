import React from "react";

const BreedDetail = ({ data }) => {
  return data.map((item, index) => {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img
            src={item?.image.url}
            className="card-img-top"
            alt={item?.name}
            style={{ width: "400px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item?.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Bred for:</strong> {item?.bred_for}
            </li>
            <li className="list-group-item">
              <strong>Breed group:</strong> {item?.breed_group}
            </li>{" "}
            <li className="list-group-item">
              <strong>Height:</strong> Imperial - {item?.height.imperial},
              Metric - {item?.height.metric}
            </li>{" "}
            <li className="list-group-item">
              <strong>Weight:</strong> Imperial - {item?.weight.imperial},
              Metric - {item?.weight.metric}
            </li>
            <li className="list-group-item">
              <strong>Life span:</strong> {item?.life_span}
            </li>{" "}
            <li className="list-group-item">
              <strong>Origin:</strong> {item?.origin}
            </li>{" "}
            <li className="list-group-item">
              <strong>Temperament:</strong> {item?.temperament}
            </li>
          </ul>
          {/* <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>

          </div> */}
        </div>
      </div>
    );
  });
};

export default BreedDetail;
