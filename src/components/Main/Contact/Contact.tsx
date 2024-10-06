import { AiFillMessage } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

import { collection, addDoc, getFirestore } from "firebase/firestore";

import { app } from "../../../firebase/app";
import { FormEvent, useRef, useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        !nameRef.current?.value ||
        !emailRef.current?.value ||
        !phoneRef.current?.value ||
        !messageRef.current?.value
      ) {
        toast("⚠️ Some fields are missing");
        return;
      }
      setLoader(true);
      const fireStore = getFirestore(app);
      const docRef = await addDoc(collection(fireStore, "contacts"), {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        phone: phoneRef.current?.value,
        message: messageRef.current?.value,
      });
      console.log(docRef);
      toast("✅ Your form has been submited successfully!");
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    } catch (e) {
      alert(e);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section id="contact" className="py-10 bg-[#e5ecfb]">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center text-3xl md:text-5xl font-bold gap-2"
        >
          <BiSupport />
          <h1>
            Get In <span className="text-purple-700">Touch</span>
          </h1>
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full px-5 flex flex-col items-center justify-center md:flex-row-reverse md:bg-white max-w-[1050px] mx-auto md:mt-10"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-md p-5 flex flex-col gap-5 mt-10 max-w-[450px] md:mt-0"
          >
            <div className="relative">
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                className="border-[1px] border-black w-full py-2 px-3 placeholder:text-lg outline-none focus:border-purple-700 focus:border-[2px] pl-11 rounded bg-[#e5ecfb]"
              />
              <FaUser className="absolute top-3 left-4 text-xl text-gray-700" />
            </div>
            <div className="relative">
              <input
                ref={emailRef}
                type="text"
                placeholder="Email"
                className="border-[1px] border-black w-full py-2 px-3 placeholder:text-lg outline-none focus:border-purple-700 focus:border-[2px] pl-11 rounded bg-[#e5ecfb]"
              />
              <MdEmail className="absolute top-3 left-4 text-xl text-gray-700" />
            </div>
            <div className="relative">
              <input
                ref={phoneRef}
                type="text"
                placeholder="Phone"
                className="border-[1px] border-black w-full py-2 px-3 placeholder:text-lg outline-none focus:border-purple-700 focus:border-[2px] pl-11 rounded bg-[#e5ecfb]"
              />
              <FaPhoneAlt className="absolute top-3 left-4 text-xl text-gray-700" />
            </div>
            <div className="relative">
              <textarea
                ref={messageRef}
                rows={8}
                placeholder="Message"
                className="border-[1px] border-black w-full py-2 px-3 placeholder:text-lg outline-none focus:border-purple-700 focus:border-[2px] pl-11 rounded bg-[#e5ecfb]"
              ></textarea>
              <AiFillMessage className="absolute top-3 left-4 text-xl text-gray-700" />
            </div>
            {loader ? (
              <button className="py-2 px-6 self-end bg-[#2506ad] text-white font-semibold w-min rounded-md hover:bg-blue-600 hover:shadow hover:shadow-blue-600 transition-all ease-in-out duration-300 flex items-center justify-center gap-2">
                Submitting{" "}
                <FaArrowRotateRight className="animate-spin text-xl" />
              </button>
            ) : (
              <button className="py-2 px-6 self-end bg-[#2506ad] text-white font-semibold w-min rounded-md hover:bg-blue-600 hover:shadow hover:shadow-blue-600 transition-all ease-in-out duration-300">
                Submit
              </button>
            )}
          </form>
          <div className="w-full hidden md:block bg-white">
            <img
              src="https://jigarsable.netlify.app/assets/images/contact1.png"
              className="mx-auto"
            />
          </div>
        </motion.section>
      </section>
    </>
  );
};

export default Contact;
