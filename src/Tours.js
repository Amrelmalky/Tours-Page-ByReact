import React from "react";
import Tour from "./Tour";
const Tours = ({ tours , deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2> Our Tours</h2>
        
      </div>
      <div className="underline"></div>

      <div>
        {/* start Passing Each of object properity to <Tour/> Component 
         As a props using a desturcturing technique for objects {...object} */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour= {deleteTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
