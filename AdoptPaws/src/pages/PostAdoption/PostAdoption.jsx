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
import Input from "../../components/Input/Input";

function PostAdoption() {
  return (
    <div className="class">
      <span className="text-black flex justify-center text-2x1">
        Create Post Adoption
      </span>
      <div className="Body">
        <div className="Picture"></div>
        <div className="Forms">

          <Input Name={"Pet's Name"} Img={Paws} Placeholder={"Name"} Import={true} Type={"text"}/>
          <Input Name={"Pet's Location"} Img={Location} Placeholder={"Location"} Import={true} Type={"text"}/>

          <div className="flex-rowe">
            <Input Name={"Pet's age or approximate"} Img={Time} Placeholder={"Age"} Import={true} Type={"text"}/>
            <Input Name={"Pet's Birthday"} Img={Cake} Placeholder={""} Import={true} Type={"date"}/>
            <Input Name={"Neutered"} Img={Neureted} Placeholder={"Yes"} Import={true} Type={"text"}/>
          </div>

          <div className="flex-rowe">
            <Input Name={"Select Gender"} Img={Gender} Placeholder={"Gender"} Import={true} Type={"text"}/>
            <Input Name={"Pet's Size"} Img={Size} Placeholder={"Size"} Import={true} Type={"text"}/>
            <Input Name={"Vaccine"} Img={Vaccine} Placeholder={"Yes"} Import={true} Type={"text"}/>
          </div>

          <div className="flex-rowe">
            <Input Name={"Predominant Color"} Img={Color} Placeholder={"Color"} Import={true} Type={"text"}/>
            <Input Name={"Telephone pet's owner"} Img={Telephone} Placeholder={"(11) 91234-5678"} Import={true} Type={"tel"}/>
          </div>

            <Input Name={"Name pet's owner"} Img={Profile} Placeholder={"Name"} Import={true} Type={"text"}/>
            <Input Name={"Add a description"} Img={Chat} Placeholder={"Description"} Import={true} Type={"text"}/>
            
          <button>
            <span>Make a Post</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostAdoption;
