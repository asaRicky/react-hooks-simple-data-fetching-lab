// create your App component here
import React, {useState, useEffect} from "react";

const App = () => {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setisLoading(true); // Set loading to true while fetching dod image
                constbresponse = await fetch("https://dog.ceo/api/breeds/image/random");
                const jsonData = await Response.json();
                setDogImage(jsonData.message);
                setisLoading(false);
            } catch (error) {
                console.error( "Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
          {isLoading ? ( // Render "Loading..." when data is being fetched
            <p>Loading...</p>
          ) : (
            // Render dog image when data is received
            <img src={dogImage} alt="A Random Dog" />
          )}
        </div>
      );
    };
    
    export default App