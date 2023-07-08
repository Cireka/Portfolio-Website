"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formRef, setFormRef] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const handleChange = (e) =>{

  // }
  // const handleSubmit = (e) =>{

  // }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      Contact
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
