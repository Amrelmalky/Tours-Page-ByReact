import React, { useState, useEffect } from "react";
import Loading from "./Loading"; // Loading Component
import Tours from "./Tours"; // Tours Component
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]); // Tours is empty array

  // function to handle the delete of the tour we put it here the blace we have the fetched data..
  // create of function and pass id as a para
  // using Filter Mathod to get only the
  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => id != tour.id);
    setTours(newTours);
  };

  // Fetch data
  const fetchTours = async () => {
    setLoading(true); // Make sure for sure that loading variable = true
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading();
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {loading && (
        <main>
          <Loading />
        </main>
      )}
      {!loading && (
        <main>
          <Tours tours={tours} deleteTour={deleteTour} />
        </main>
      )}
    </>
  );
}

export default App;
