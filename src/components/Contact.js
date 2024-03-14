import User from "./Users";
import { useState, useEffect } from "react";
import { USER_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Contact = () => {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    const d = await fetch(USER_URL + "mahakjain898");
    const json = await d.json();
    setUser(json);
    // console.log(user);
  };

  useEffect(() => {
    fetchData();
    // console.log(User);
  }, []);

  return !user ? (
    <Shimmer />
  ) : (
    <div>
      <h1>This is contacct page</h1>
      <User
        name={user.name}
        location={user.location}
        profile={user.url}
        photo={user.avatar_url}
      />
    </div>
  );
};

export default Contact;
