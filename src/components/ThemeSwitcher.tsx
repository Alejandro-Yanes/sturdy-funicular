"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import { themeContext, useThemeContext } from "@/context/themeContext";

export type ThemeSwitcherProps = {};

const ThemeSwitcher: React.FunctionComponent<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitcher;
