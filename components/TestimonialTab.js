import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData, dataSlice, updateData } from "../store/dataSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: "10px",
    border: "4px solid #cbf3f0",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const TestimonialTab = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const data = useSelector((state) => state.dataSlice.data);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (name && description) {
      setTestimonials([...testimonials, { name, description }]);
      closeModal();
    }
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      dispatch(updateData({ testimonials: testimonials }));
    }
  }, [testimonials]);

  useEffect(() => {
    if (data.testimonials) {
      setTestimonials(data.testimonials);
    }
  }, [data]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="text-center py-5">
      <h1 className="text-2xl my-10">Tesimonials</h1>
      <div className="grid grid-cols-3 gap-5 my-10">
        {data.testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="flex space-y-6 flex-col cursor-pointer hover:bg-slate-200 justify-center text-center space-x-3 items-center bg-slate-100 px-3 py-2 rounded-lg w-fit">
              <p className="text-xl">{testimonial.name}</p>
              <p className="text-sm font-semibold">
                {testimonial.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="my-5">
        <button
          onClick={() => {
            openModal();
          }}
          className="bg-[#EFF6F6] flex items-center justify-center mx-auto px-3 py-2 w-[22rem] rounded-lg"
        >
          <HiPlus className="h-5 w-5 mx-5 text-buildbuddyPurple" /> Add One More
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center font-['Cairo']">
          <div className="flex flex-col space-y-3 max-w-md mx-auto my-5 justify-center">
            <h1 className="text-2xl">Tesimonials</h1>
            <input
              type="text"
              className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <textarea
              className="bg-[#EFF6F6] outline-none placeholder:text-sm focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl max-h-40"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button
              onClick={handleClick}
              className="bg-buildbuddyYellowLight hover:brightness-110 px-5 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialTab;
