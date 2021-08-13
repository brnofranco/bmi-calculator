import React from 'react';

import './styles.css';

export const Table = () => {
  return(
    <div className="table-container">
      <div className="table-content">
        <table className="data-table">
          <tbody>
            <tr>
              <td> Below 18.5 </td>
              <td> Underweight </td>
            </tr>
            <tr>
              <td> 18.5 – 24.9 </td>
              <td> Healthy Weight </td>
            </tr>
            <tr>
              <td> 25.0 – 29.9 </td>
              <td> Overweight </td>
            </tr>
            <tr>
              <td> 30.0 and above </td>
              <td> Obese </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}