//props - properties
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }


const Body = () => {
    // const searchText = "tc";
    // React usedes one way date binding
    // hooks are just a normal function and it's take a function like getters and setters
    // Initialize state variables using the 'useState' hook
    const [searchText, setSearchText] = useState("");// searchText for input
    const [restaurants, setRestaurants] = useState(restaurantList);// restaurant data
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