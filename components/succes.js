import React from "react";
import {TiTick} from "react-icons/ti"

export default function Succes() {
  return (
    <div
      id="toast-simple"
      className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow"
      role="alert"
    >
      <TiTick  className="w-6 h-6 text-green-500"/>
      <div className="pl-4 text-sm font-normal">Empleado agregado</div>
    </div>
  );
}
