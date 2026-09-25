import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { toast } from "react-toastify";

const Setting = () => {
  const [message, setMessage] = useState({
    fullName: "",
    classSection: "",
    rollNo: "",
    contact: "",
    address: "",
    email: "",
  });

  // Handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage({
      ...message,
      [name]: value,
    });
  };

  // Save
  const notify = () => {
    if (
      message.fullName.trim() === "" ||
      message.classSection.trim() === "" ||
      message.rollNo.trim() === "" ||
      message.contact.trim() === "" ||
      message.address.trim() === "" ||
      message.email.trim() === ""
    ) {
      toast.error("Please fill the information");
    } else {
      toast.success("Profile updated Successfully.");

      console.log(message);

      // Clear form
      setMessage({
        fullName: "",
        classSection: "",
        rollNo: "",
        contact: "",
        address: "",
        email: "",
      });
    }
  };

  // Cancel button
  const handleCancel = () => {
    setMessage({
      fullName: "",
      classSection: "",
      rollNo: "",
      contact: "",
      address: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Page Heading */}
      <h1 className="text-[#1A3A52] text-[32px] font-bold">Student Profile</h1>

      {/* Student Information Form */}
      <div className="flex flex-col bg-white w-[782px] p-10 gap-3 rounded-3xl">
        {/* Full Name */}
        <label htmlFor="fullName">Full Name:</label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          value={message.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Section/Class */}
        <label htmlFor="classSection">Section/Class:</label>

        <input
          id="classSection"
          name="classSection"
          type="text"
          value={message.classSection}
          onChange={handleChange}
          placeholder="9 'A'"
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Roll Number */}
        <label htmlFor="rollNo">Roll No:</label>

        <input
          id="rollNo"
          name="rollNo"
          type="number"
          value={message.rollNo}
          onChange={handleChange}
          min="1"
          max="10"
          placeholder="Enter your Roll no."
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Contact Number */}
        <label htmlFor="contact">Contact Number:</label>

        <input
          id="contact"
          name="contact"
          type="tel"
          value={message.contact}
          onChange={handleChange}
          placeholder="Enter your parents contact number."
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Address */}
        <label htmlFor="address">Address:</label>

        <input
          id="address"
          name="address"
          type="text"
          value={message.address}
          onChange={handleChange}
          placeholder="Enter your Home address."
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* Email */}
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          name="email"
          type="email"
          value={message.email}
          onChange={handleChange}
          placeholder="Enter your email address."
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Buttons */}
      <div className="mt-4">
        <Button onClick={notify} className="bg-[#3B82F6] text-white h-12">
          Save Changes
        </Button>

        <Button
          onClick={handleCancel}
          className="bg-[#F3F4F6] border border-[#939393] h-12 ml-2"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Setting;
