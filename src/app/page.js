
import { BiUserPlus } from 'react-icons/bi'
import Table from '../../components/table';
import Form from '../../components/form'

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-5xl md:text-4xl text-center font-bold py-9 ">
          Empleados Contratados
        </h1>
        <div className="container mx-auto flex justify-between py-4 border-b">
          <div className="left flex gap-3">
            <button className="flex items-center bg-orange-500 py-2 px-4 text-white text-sm hover:bg-orange-400 hover:border-orange-600">
              Agregar empleado  <BiUserPlus  className='text-md ml-1'/>
            </button>
          </div>
        </div>
        <div className='container mx-auto'>
          <div className='px-2 py-8'>
            <Form />
          </div>
          <Table />
        </div>
      </main>
    </div>
  );
}
