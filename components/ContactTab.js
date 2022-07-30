import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData, dataSlice, updateData } from "../store/dataSlice";

const ContactTab = () => {
  const data = useSelector((state) => state.dataSlice.data);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [links, setLinks] = useState([]);
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleChange = () => {
    if (name && email && address && phone) {
      dispatch(updateData({ contact: { name, email, address, phone } }));
    }
  };

  const handleChangeLink = () => {
    dispatch(updateData({links: links}));
  };

  useEffect(() => {
    setLinks([
      {
        name: "Instagram",
        url: instagram,
      },
      {
        name: "Github",
        url: github,
      },
      {
        name: "Linkedin",
        url: linkedin,
      },
      {
        name: "Youtube",
        url: youtube,
      },
    ]);      
  }, [linkedin, instagram, github, youtube]);

  useEffect(() => {
    if (data.links.length > 0) {
      setInstagram(data.links[0].url);
      setGithub(data.links[1].url);
      setLinkedin(data.links[2].url);
      setYoutube(data.links[3].url);
    }
    setAddress(data.contact.address);
    setEmail(data.contact.email);
    setName(data.contact.name);
    setPhone(data.contact.phone);
  }, [data]);

  return (
    <div className="text-center">
      <h1 className="text-2xl">Contact</h1>
      <div className="flex flex-col space-y-3 max-w-md mx-auto my-5 justify-center">
        <input
          type="text"
          className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
          placeholder="Adddress"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="text"
          className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
          placeholder="Phone no."
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <div className="flex justify-center py-10">
          <button
            onClick={handleChange}
            className="bg-buildbuddyYellowLight border-2 border-buildbuddyYellowLight duration-500 focus:brightness-110 px-5 py-2 w-full rounded-lg"
          >
            Add Contact
          </button>
        </div>
        <h1 className="text-xl">Links</h1>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
            placeholder="Instagram"
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
          />
          <input
            type="text"
            className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
            placeholder="Youtube"
            value={youtube}
            onChange={(e) => {
              setYoutube(e.target.value);
            }}
          />
          <input
            type="text"
            className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
            placeholder="Linkedin"
            value={linkedin}
            onChange={(e) => {
              setLinkedin(e.target.value);
            }}
          />
          <input
            type="text"
            className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
            placeholder="Github"
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center py-10">
          <button
            onClick={handleChangeLink}
            className="bg-buildbuddyYellowLight border-2 border-buildbuddyYellowLight duration-500 focus:brightness-110 px-5 py-2 w-full rounded-lg"
          >
            Add Links
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
