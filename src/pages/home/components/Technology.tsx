import { equipment } from '../constants/home.constants'

export default function Technology() {
    return (
        <div className="bg-primary flex items-center gap-1 px-2 py-3 ">
            <img src={equipment.url} alt={equipment.alt} className='w-40' />

            <div className='text-white'>
                <h1 className='font-bold text-md mb-2'>Tecnologia de Ponta para Satisfazer suas Necessidades</h1>
                <p className='text-xxs mb-1'>Estamos comprometidos em oferecer soluções de alta qualidade que atendam e superem as expectativas dos nossos clientes. </p>
                <p className='text-xxs'>Para garantir isso, investimos continuamente em equipamentos de última geração.</p>
            </div>
        </div>
    );
}