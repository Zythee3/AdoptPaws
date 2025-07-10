import React from "react";

const Input = ({Name, Img, Placeholder, Import, Type, value, onChange, name}) => {
  
    return (
    <div className="InputDiv">
      <label htmlFor={name}>
        {Name} {Import && <span className="text-red-600">*</span>}
      </label>
      <div className="boxInput">
        <img src={Img} alt="" />
        <input 
          className="input" 
          type={Type} 
          id={name} 
          name={name}
          placeholder={Placeholder} 
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
