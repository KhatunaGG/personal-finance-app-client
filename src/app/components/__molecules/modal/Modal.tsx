"use client";
import { useContext } from "react";
import AddModal from "../../__organism/pageModal/PageModal";
import { GlobalContext } from "@/app/context/Context";

const Modal = () => {
  const context = useContext(GlobalContext);
  const { isModal } = context || {};

  return (
    <section className="absolute inset-0 bg-black/50 w-full h-full z-10 ">
      <AddModal />
    </section>
  );
};

export default Modal;
