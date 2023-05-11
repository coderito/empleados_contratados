import React from "react";
import {BiError} from "react-icons/bi"

export default function Bug() {
  return (
    <div
      id="toast-simple"
      className="flex items-center w-full max-w-xs p-4 space-x-4 bg-red-50 text-gray-500 divide-x divide-gray-200 rounded-lg shadow"
      role="alert"
    >
      <BiError  className="w-6 h-6 text-red-500"/>
      <div className="pl-4 text-sm font-normal">Error al agregar</div>
    </div>
  );
}
