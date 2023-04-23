import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

// bold icons
import BoldVerifiedIcon from "components/Icons/Bold/verified";
import BoldMailIcon from "components/Icons/Bold/mail";
import BoldLocationIcon from "components/Icons/Bold/location";
import BoldExpierenceIcon from "components/Icons/Bold/expierence";
import BoldMoneyIcon from "components/Icons/Bold/money";
import BoldLicenceIcon from "components/Icons/Bold/licence";
import LightUserNameIcon from "components/Icons/Light/userName";

const Main = (props) => {
  const navigate = useNavigate();
  const curr_date = new Date();
  const [date, SetDate] = useState(curr_date);
  const [isOnline, setOnline] = useState(false);
  // YearsOf experience email address
  const handleBookAppointment = () => {
    navigate("/slotBook", {
      state: {
        date: `${date}`,
        doc_id: props.doc_id,
        data: props.data,
        status: isOnline,
      },
    });
  };

  const setStatus = (e) => {
    const { value } = e.target;
    console.log("valueess : ", value);
    setOnline(value);
  };

  const maxdate = new Date(curr_date);
  maxdate.setDate(maxdate.getDate() + 1);

  return (
    <div className="flex text-white p-8">
      <div className="w-[80%] mx-auto flex flex-col space-y-6">
        {/* experience */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <BoldExpierenceIcon size="25" color="#ffffff" />
          </div>
          {/*  */}
          <div className="text-md font-bold"></div>
          {props.data.years_Of_Experience} Years of Experience
        </div>

        {/* medical registration verified */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <BoldVerifiedIcon size="25" color="#39FF14" />
          </div>

          {/*  */}
          <div className="text-md font-bold">Medical Registration Verified</div>
        </div>

        {/* Clinic/center address */}
        <div className="flex space-x-3">
          <div>
            <BoldLocationIcon size="25" color="#FF0000" />
          </div>

          {/*  */}
          <div className="text-md font-bold">
            Wellness Clinic , {props.data.locality}
          </div>
        </div>

        {/* fees */}
        <div className="flex space-x-3 cursor-pointer">
          <div className="my-auto">
            <BoldMoneyIcon size="25" color="#39FF14" />
          </div>

          {/*  */}
          <div className="text-md font-bold">₹{props.data.fees}/session</div>
        </div>

        {/* License no. */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <BoldLicenceIcon size="25" color="#ffffff" />
          </div>

          {/*  */}
          <div className="text-md font-bold">
            License ID : {props.data.licenseNumber}
          </div>
        </div>

        {/* Phone no. */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <LightUserNameIcon size="25" color="#ffffff" />
          </div>

          {/*  */}
          <div className="text-md font-bold">
            Phone no. : +91 {props.data.phoneNumber}
          </div>
        </div>

        {/* Datepicker for appointment date selection */}
        <div className="">
          <div className="text-md font-bold mb-1">
            Select Appointment/Session Date :
          </div>
          <DatePicker
            className="p-2 rounded-md text-black"
            minDate={new Date(new Date().toISOString().split("T")[0])}
            maxDate={new Date(maxdate)}
            onChange={(app_date) => SetDate(app_date)}
            selected={date}
            placeholderText="select appointment date"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Appointment virtual or in-person checkbox */}
        <div className="flex mt-3 ml-2">
          <div className="flex items-center mr-4">
            <input
              id="virtual-radio1"
              type="radio"
              value={true}
              name="inline-radio-group"
              className="w-4 h-4"
              checked={isOnline ? true : false}
              onChange={setStatus}
            />
            <label
              for="virtual-radio"
              className="ml-2 text-md font-semibold text-white"
            >
              Virtual
            </label>
          </div>

          {/*  */}
          <div class="flex items-center mr-4">
            <input
              id="virtual-radio2"
              type="radio"
              value={false}
              name="inline-radio-group"
              className="w-4 h-4"
              checked={!isOnline ? true : false}
              onChange={setStatus}
            />
            <label
              for="inperson-radio"
              className="ml-2 text-md font-semibold text-white"
            >
              Visit
            </label>
          </div>
        </div>

        {/* button */}
        <div className="button mt-5" onClick={handleBookAppointment}>
          Book Appointment
        </div>
      </div>
    </div>
  );
};

export default Main;
