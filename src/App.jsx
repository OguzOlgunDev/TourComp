const url = "https://www.course-api.com/react-tours-project";

import { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Tours from "./components/Tours";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTourArr = tours.filter((tour) => tour.id !== id);
    setTours(newTourArr);
  };

  const fetchUrl = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2> There is no item</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => {
              fetchUrl();
            }}
          >
            Refres
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
