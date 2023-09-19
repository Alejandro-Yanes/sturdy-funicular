import React from "react";

export type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 . All rights reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold ">About this website:</span> built with
        React & next.js (App Router & server Actions), Typescript , tailwind
        css, framer motion, react email & resend, vercel hosting
      </p>
    </footer>
  );
};

export default Footer;
