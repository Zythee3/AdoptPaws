import React from "react";

const Input = ({Name, Img, Placeholder, Import, Type}) => {
  
    return (
    <div className="InputDiv">
      <label htmlFor="name">
        {Name} {Import && <span className="text-red-600">*</span>}
      </label>
      <div className="boxInput">
        <img src={Img} alt="" />
        <input className="input" type={Type} id="name" placeholder={Placeholder} />
      </div>
    </div>
  );
};

export default Input;
