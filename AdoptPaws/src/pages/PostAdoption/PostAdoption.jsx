import React from "react";
import "./PostAdoption.css";
import Paws from "../../assets/Paws.svg";
import Location from "../../assets/Location.svg";
import Time from "../../assets/Time.svg";
import Cake from "../../assets/Cake.svg";
import Neureted from "../../assets/Neureted.svg";
import Gender from "../../assets/Gender.svg";
import Size from "../../assets/Size.svg";
import Vaccine from "../../assets/Vaccine.svg";
import Color from "../../assets/Color.svg";
import Profile from "../../assets/Profile.svg";
import Telephone from "../../assets/Telephone.svg";
import Chat from '../../assets/Chat.svg'

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
              <img src={Location} alt="" />
              <input
                className="input"
                type="text"
                id="location"
                placeholder="Location"
              />
            </div>
          </div>

          <div className="flex-rowe">
            <div className="InputDiv">
              <label htmlFor="age">
                Pet's age or approximate <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Time} alt="" />
                <input
                  className="input"
                  type="number"
                  id="age"
                  placeholder="Age"
                />
              </div>
            </div>

            <div className="InputDiv">
              <label htmlFor="birthday">Pet's Birthday</label>
              <div className="boxInput">
                <img src={Cake} alt="" />
                <input
                  className="input"
                  type="date"
                  id="birthday"
                  placeholder=""
                />
              </div>
            </div>

            <div className="InputDiv">
              <label htmlFor="neureted">
                Neutered <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Neureted} alt="" />
                <input
                  className="input"
                  type="text"
                  id="neureted"
                  placeholder="Yes"
                />
              </div>
            </div>
          </div>

          <div className="flex-rowe">
            <div className="InputDiv">
              <label htmlFor="gender">
                Select Gender <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Gender} alt="" />
                <input
                  className="input"
                  type="text"
                  id="gender"
                  placeholder="Gender"
                />
              </div>
            </div>

            <div className="InputDiv">
              <label htmlFor="size">
                Pet's Size <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Size} alt="" />
                <input
                  className="input"
                  type="text"
                  id="size"
                  placeholder="Size"
                />
              </div>
            </div>

            <div className="InputDiv">
              <label htmlFor="vaccine">
                Vaccine <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Vaccine} alt="" />
                <input
                  className="input"
                  type="text"
                  id="vaccine"
                  placeholder="Yes"
                />
              </div>
            </div>
          </div>

          <div className="flex-rowe">
            <div className="InputDiv">
              <label htmlFor="color">
                Predominant Color <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Color} alt="" />
                <input
                  className="input"
                  type="text"
                  id="color"
                  placeholder="Color"
                />
              </div>
            </div>
            <div className="InputDiv">
              <label htmlFor="telephone">
                Telephone pet's owner <span className="text-red-600">*</span>
              </label>
              <div className="boxInput">
                <img src={Telephone} alt="" />
                <input
                  className="input"
                  type="tel"
                  id="telephone"
                  placeholder="(11) 91234-5678"
                />
              </div>
            </div>
          </div>

          <div className="InputDiv">
            <label htmlFor="profile">
              Name pet's owner <span className="text-red-600">*</span>
            </label>
            <div className="boxInput">
              <img src={Profile} alt="" />
              <input
                className="input"
                type="text"
                id="profile"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="InputDiv">
            <label htmlFor="chat">
              Add a description <span className="text-red-600">*</span>
            </label>
            <div className="boxInput">
              <img src={Chat} alt="" />
              <input
                className="input"
                type="text"
                id="chat"
                placeholder="Description"
              />
            </div>
          </div>
          
          <button>
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostAdoption;
