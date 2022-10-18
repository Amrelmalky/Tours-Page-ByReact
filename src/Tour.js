import React, { useState } from "react";

// desturcturing properities of object
const Tour = ({ id, name, info, image, price ,deleteTour }) => {
  // using state hook for readMore State  initial value is false = the full info
  const [readMore, setReadMore] = useState(false);

  // function to handel display of info text
  const DisplayInfoHandler = () => {
    setReadMore(!readMore);
  };

  // function invoke the deleted function 
  const deleteTourHandler = () => {
    deleteTour(id);
  }



  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>

        {/* Checking state of readMore if true display the full info */}
        {/* Checking state of readMore if !true false display only 100 character  using substring method */}
        <p>
          {/* readMore = true  so full info */}
          {readMore && info}
          {/* readMore != tre so false substring the string */}
          {!readMore && `${info.substring(0, 100)}....`}

           {/* onClick the function will change state of read more to the Oppsite العكس if true will be false and if it false will be true */}
            {/* the inside the  */}
          <button onClick={DisplayInfoHandler}>

          {/* if readMore True Burron : read less and والعكس */}
            {readMore ? "Read Less" : "Read More.."}
          </button>
        </p>
        <button className="delete-btn" onClick={deleteTourHandler }>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
