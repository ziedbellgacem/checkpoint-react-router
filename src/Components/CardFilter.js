import "./CarStyle.css"
import Example from "./ModaAdd";
import {FormControl} from "react-bootstrap"

import ReactStars from "react-rating-stars-component";
function Filter({getRating,getSearch,Add}){
    
    const ratingChanged = (newRating) => {
        getRating(newRating);
      };
    return(
        <div className="fil">
           <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => getSearch(e.target.value)}
          />
        <ReactStars 
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
           <Example Add={Add}/>
           
        </div>
    )
}
export default Filter;