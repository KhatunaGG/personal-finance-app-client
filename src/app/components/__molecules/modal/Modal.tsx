"use client";
import AddModal from "../../__organism/pageModal/PageModal";

const Modal = () => {
  return (
    <section className="absolute inset-0 bg-black/50 w-full h-full z-10 ">
      <AddModal />
    </section>
  );
};

export default Modal;
