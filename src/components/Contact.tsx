"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";

export type ContactProps = {};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Contact: React.FunctionComponent<ContactProps> = (props) => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-0 w-[min(100%,38rem)] text-center"
      ref={ref}
    >
      <SectionHeading title="Contact me" />
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline cursor-pointer" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          className="h-14 rounded-lg borderBlack p-2  "
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 borderBlack p-2"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
