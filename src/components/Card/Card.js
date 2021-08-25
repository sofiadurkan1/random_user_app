import { useState, useEffect } from "react";
import axios from "axios";



const Card = () => {
  const [user, setUser] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      // console.log(response.data.results[0])
      setUser(response.data.results[0]);
    });
  }, [isLoaded]);

  const randomUser = () => {
    // console.log(setIsLoaded(!isLoaded));
    setIsLoaded(!isLoaded);
  };

  return (
    <div className="container">
      <div className="card">
        <img className="img" src={user?.picture?.large} alt="" />
        <p className="full-name">
          {user?.title}
          {user?.name?.first}
          {user?.name?.last}
        </p>
      
      <div className="userEmail">
        <p>{user.email}</p>
      </div>
      <div className="userPhone">
        <p>{user.phone}</p>
      </div>
      <div className="userLocation">
        <p>
          {user?.location?.city} {user?.location?.country}
        </p>
      </div>
      <div>
        <p className="userAge">Age:{user.age}</p>
        <p className="userRegisterDate">
          Register Date:{user?.registered?.date}{" "}
        </p>
      </div>
      <div>
        <button className="button" onClick={randomUser}>
          Random User
        </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
