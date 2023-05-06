import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };
    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
