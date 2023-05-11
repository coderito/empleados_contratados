import { BiEdit, BiTrash } from "react-icons/bi";
import data from "../database/data.json";

export default function Table() {
  function ScopeTableRowItem({ id, name, email, status, salary, date }) {
    return (
      <tr class="border-b border-gray-200 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
        >
          {name || "Unknown"}
        </th>
        <td class="px-6 py-4">{email || "Unknown"}</td>
        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          {date || "Unknown"}
        </td>
        <td class="px-6 py-4">
          {status === "Active" ? (
            <button className="bg-green-400 text-white px-3 py-1 rounded-sm">
              {status || "Unknown"}
            </button>
          ) : (
            <button className="bg-red-400 text-white px-3 py-1 rounded-sm">
              {status || "Unknown"}
            </button>
          )}
        </td>
        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          {salary || "Unknown"}
        </td>
        <td class="px-6 py-4 flex justify-around">
          <BiEdit size={25} className="text-green-600" />
          <BiTrash size={25} className="text-red-600" />
        </td>
      </tr>
    );
  }

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr className="bg-black text-white">
            <th scope="col" class="px-6 py-3 ">
              Nombre
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Fecha de Ingreso
            </th>
            <th scope="col" class="px-6 py-3">
              Estado
            </th>
            <th scope="col" class="px-6 py-3">
              Sueldo
            </th>
            <th scope="col" class="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <ScopeTableRowItem {...item} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
