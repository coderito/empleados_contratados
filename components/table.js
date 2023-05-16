import { BiEdit, BiTrash } from "react-icons/bi";
import { getUsers } from "../lib/helpers";
import { useQuery } from "react-query";

export default function Table() {

  const {isLoading, isError, data, error} = useQuery('users', getUsers)

  if(isLoading) return <>Cargando empleados..</>

  if(isError) return <>Error {error}</>

  function ScopeTableRowItem({ id, name, email, status, salary, date }) {
    return (
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
        >
          {name || "Unknown"}
        </th>
        <td className="px-6 py-4">{email || "Unknown"}</td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          {date || "Unknown"}
        </td>
        <td className="px-6 py-4">
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
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          {salary || "Unknown"}
        </td>
        <td className="px-6 py-4 flex justify-around">
          <BiEdit size={25} className="text-green-600" />
          <BiTrash size={25} className="text-red-600" />
        </td>
      </tr>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr className="bg-black text-white">
            <th scope="col" className="px-6 py-3 ">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha de Ingreso
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Sueldo
            </th>
            <th scope="col" className="px-6 py-3">
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
