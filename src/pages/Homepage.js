import { Link } from "react-router-dom";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepageContainer">
      <h3>Welcome!</h3>
      <p>What would you like to equip your store with?</p>
      <div className="link-container">
        <Link to="/shop" className="linkBtn">
          {" "}
          Check out our Readers
        </Link>
        <br></br>
        <Link to="/shows" className="linkBtn" > Go to the shows</Link>
      </div>
    </div>
  );
};
