import { BiEdit, BiTrash } from "react-icons/bi"

export default function Table() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className='bg-black text-white'>
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
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    $2999
                </td>
                 <td class="px-6 py-4 flex justify-around">
                    <BiEdit size={25} className='text-green-600'/>
                    <BiTrash size={25} className='text-red-600'/>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    <button className="bg-green-400 text-white px-3 py-1 rounded-sm">Contratado</button>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    $2999
                </td>
                <td class="px-6 py-4 flex justify-around">
                    <BiEdit size={25} className='text-green-600'/>
                    <BiTrash size={25} className='text-red-600'/>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    $2999
                </td>
                <td class="px-6 py-4 flex justify-around">
                    <BiEdit size={25} className='text-green-600'/>
                    <BiTrash size={25} className='text-red-600'/>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    $2999
                </td>
                <td class="px-6 py-4 flex justify-around">
                    <BiEdit size={25} className='text-green-600'/>
                    <BiTrash size={25} className='text-red-600'/>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    $2999
                </td>
                <td class="px-6 py-4 flex justify-around">
                    <BiEdit size={25} className='text-green-600'/>
                    <BiTrash size={25} className='text-red-600'/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}
