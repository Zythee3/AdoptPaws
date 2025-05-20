import React from "react";
import "./PostAdoption.css";
import Paws from '../../assets/Paws.svg'

function PostAdoption() {
  return (
    <div className="class">
      <span className="text-black flex justify-center text-2x1">
        Create Post Adoption
      </span>
      <div className="Body">
        <div className="Picture"></div>
        <div className="Forms">
          <div className="InputDiv">
            <label htmlFor="name">
              Pet's Name <span className="text-red-600">*</span>
            </label>
            <div className="boxInput">
              <img src={Paws} alt="" />
              <input
                className="input"
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="InputDiv">
            <label htmlFor="location">
              Pet's Location <span className="text-red-600">*</span>
            </label>
            <div className="boxInput">
            
              <input
                className="input"
                type="text"
                id="location"
                placeholder="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostAdoption;
