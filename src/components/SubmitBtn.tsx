import { FaPaperPlane } from "react-icons/fa";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn: React.FunctionComponent = (props) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <div className="border-b-2 border-white h-5 w-5 animate-spin rounded-full"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;