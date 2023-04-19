import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleRoom = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>From SingleRoom</h2>
    </div>
  );
};

export default SingleRoom;
