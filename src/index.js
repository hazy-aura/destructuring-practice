import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const {
  model: hondaModel,
  coloursByPopularity: hondaTopColour,
  speedStats: { topSpeed: hondaTopSpeed }
} = cars[0];
console.log(hondaModel);
const {
  model: teslaModel,
  coloursByPopularity: teslaTopColour,
  speedStats: { topSpeed: teslaTopSpeed }
} = cars[1];
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
