"use client";

import { useReducer } from "react";
import { GrUpdate } from "react-icons/gr";
import Succes from "./succes";
import Bug from "./bug";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  if (Object.keys(formData).length > 0) return <Bug />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block">Nombre</label>
          <input
            className="block px-3 w-full py-2 bg-gray-100 border border-gray-400 rounded-md"
            onChange={setFormData}
            name="fistname"
            type="text"
            placeholder="Juan"
          />
        </div>
        <div>
          <label className="block">Apellido</label>
          <input
            className="block px-3 w-full py-2 bg-gray-100 border border-gray-400 rounded-md"
            onChange={setFormData}
            name="lastname"
            type="text"
            placeholder="Salazar"
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            className="block px-3 w-full py-2 bg-gray-100 border border-gray-400 rounded-md"
            onChange={setFormData}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label className="block">Salario</label>
          <input
            className="block px-3 w-full py-2 bg-gray-100 border border-gray-400 rounded-md"
            onChange={setFormData}
            name="salary"
            type="text"
            placeholder="1300"
          />
        </div>
        <div>
          <label className="block">Salario</label>
          <input
            className="block px-3 w-full py-2 bg-gray-100 border border-gray-400 rounded-md"
            onChange={setFormData}
            name="date"
            type="date"
            placeholder="1300"
          />
        </div>
        <div className="flex items-center gap-10">
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                onChange={setFormData}
                type="radio"
                name="status"
                value="Active"
                class="w-4 h-4 cursor-pointer text-green-600 bg-gray-100 border-gray-300  ring-inset focus:ring-green-500"
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="helper-radio" class="text-gray-900">
                Contratar
              </label>
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-500"
              >
                Hacer contratos o contratas de un trabajo.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                onChange={setFormData}
                aria-describedby="helper-radio-text"
                type="radio"
                value="Inactive"
                name="status"
                class="w-4 h-4 text-green-600 cursor-pointer bg-gray-100 border-gray-300  ring-inset focus:ring-green-500"
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="helper-radio" class="text-gray-900">
                Rescindir
              </label>
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-500"
              >
                Dejar sin efecto un contrato u otra obligación legal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-yellow-400 px-5 py-2 flex justify-center items-center gap-2 rounded-sm mt-3 w-full font-medium">
        Actualizar <GrUpdate size={20} />
      </button>
    </form>
  );
}
