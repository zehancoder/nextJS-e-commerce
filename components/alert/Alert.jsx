"use client";
import { alertMessageState } from "@/toolkit/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Alert() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.alertMessage);
  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        dispatch(alertMessageState(""));
      }, 2000);
    }
  }, [message]);
  return (
    <div
      className={`fixed transition z-30 duration-500 bottom-10 right-10 ${message !== "" ? " translate-x-0" : "translate-x-[150%]"}`}
    >
      <div
        className="flex items-center gap-4 p-4 relative rounded-md max-w-4xl mx-auto shadow-[0_2px_16px_-3px_rgba(144,144,144,0.4)] bg-white"
        role="alert"
      >
        <span className="block absolute w-1 rounded-full h-[80%] my-auto top-0 bottom-0 left-2  bg-green-500"></span>
        <div className="flex sm:items-center gap-4 ml-3 max-sm:flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 w-6 h-6 fill-green-500"
            viewBox="0 0 500 500"
          >
            <clipPath id="a">
              <path d="M0 0h500v500H0z" data-original="#000000" />
            </clipPath>
            <g clipPath="url(#a)">
              <path
                fillRule="evenodd"
                d="M250 500c138.071 0 250-111.929 250-250S388.071 0 250 0 0 111.929 0 250s111.929 250 250 250zm-68.781-265.687c-10.545-10.544-27.64-10.544-38.184 0-10.544 10.545-10.544 27.64 0 38.184l66.468 66.468c10.544 10.544 27.639 10.544 38.184 0l127.279-127.279c10.544-10.544 10.544-27.64 0-38.184s-27.64-10.544-38.184 0L228.595 281.69z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </g>
          </svg>
          <div>
            <h6 className="text-slate-900 text-[15px] lg:text-base font-medium">{message}</h6>
          </div>
        </div>
        <div onClick={() => dispatch(alertMessageState(""))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 w-[14px] h-[14px] ml-auto cursor-pointer fill-gray-400 hover:fill-red-400"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            />
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Alert;
