import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleRoom = () => {
  const id = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/room/${id.id}`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(err => console.log(err));
  }, [id]);
  console.log(userData);
  return (
    <div>
      <h2>From SingleRoom</h2>
    </div>
  );
};

export default SingleRoom;
