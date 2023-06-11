import React from "react";

interface IGreting {
    name: string
}

const Greting = ({name}: IGreting) => {

  return (
    <div>
     <h3>HI {name}</h3>
    </div>
  );
};

export default Greting;