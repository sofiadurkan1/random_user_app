import { useState, useEffect } from "react";
import axios from "axios";
import Email from "../svg/Email";
import Location from "../svg/Location";
import Phone from "../svg/Phone";

const Card = () => {
  const [user, setUser] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      // console.log(response.data.results[0])
      setUser(response.data.results[0]);
    });
  }, [isLoaded]);

  const getRandomUser = () => {
    // console.log(setIsLoaded(!isLoaded));
    setIsLoaded(!isLoaded);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="first-box">
          <img className="img" src={user?.picture?.large} alt="" />
          <p className="info">
            {user?.name?.title} {user?.name?.first} {user?.name?.last}
          </p>
        </div>
        <div className="user-email">
          <Email className="img" />
          <p className="info">{user.email}</p>
        </div>
        <div className="user-phone">
          <Phone className="img" />

          <p className="info">{user.phone}</p>
        </div>
        <div className="user-location">
          <Location className="img" />
          <p className="info">
            {user?.location?.city} {user?.location?.country}
          </p>
        </div>
        <div className="user-register">
          <p className="info">Age:{user?.registered?.age}</p>
          <p className="info">
            Register Date:{user?.registered?.date.slice(0, 10)}
          </p>
        </div>
      </div>
      <div>
        <button className="button" onClick={getRandomUser}>
          Random User
        </button>
      </div>
    </div>
  );
};

export default Card;
