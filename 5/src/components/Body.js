//props - properties
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";

function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}


const Body = () => {
    // const searchText = "tc";
    // React usedes one way date binding
    // hooks are just a normal function and it's take a function like getters and setters
    // Initialize state variables using the 'useState' hook
    const [searchText, setSearchText] = useState("");// searchText for input
    const [restaurants, setRestaurants] = useState(restaurantList);// restaurant data
    
    //call back function + dependency array 
    useEffect(() =>{
      //console.log("rendering");
      //if it not dependeing upon anything then it'll only call automatically by once - empty dependency array [];
      //API call
      getRestaurants();
    },[]);

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2965552&lng=77.99659609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      //convert into an readable object
      const json = await data.json();
      console.log(json);
      //optional chaining
      setRestaurants(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <>
          {/* Search input and button */} 
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search a restaurant you want..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button
              className="search-btn"
              onClick={() => {
                // When the search button is clicked:
                // 1. Filter the restaurant data based on the searchText
                const data = filterData(searchText, restaurants); 
                // 2. Update the state of the 'restaurants' list with the filtered data
                setRestaurants(data);
              }}
            >
              Search
            </button>
          </div>

          {/* Display the list of restaurants */}
          <div className="restaurant-list">
            {restaurants.map((restaurant) => {
              return (
                // Render each restaurant as a 'RestaurantCard' component
                <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
              );
            })}
          </div>
        </>
      );
    };

export default Body;