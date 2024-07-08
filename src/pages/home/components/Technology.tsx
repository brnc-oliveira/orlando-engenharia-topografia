import { equipment } from '../constants/home.constants'

export default function Technology() {
    return (
        <div className="flex items-center justify-between px-1 py-4 md:py-10 md:px-1 lg:px-[140px]">
            <img src={equipment.url} alt={equipment.alt} className='w-40 md:w-[220px] lg:w-[330px]' />

            <div className='text-gray'>
                <h1 className='font-bold max-[360px]:text-sm text-md md:text-2xl lg:text-3xl mb-2'>Tecnologia de Ponta para Satisfazer suas Necessidades</h1>
                <p className='mb-1 max-[360px]:text-xxs2 text-xxs md:text-lg lg:text-lg'>Estamos comprometidos em oferecer soluções de alta qualidade que atendam e superem as expectativas dos nossos clientes. </p>
                <p className='max-[360px]:text-xxs2 text-xxs md:text-lg lg:text-lg'>Para garantir isso, investimos continuamente em equipamentos de última geração.</p>
            </div>
        </div>
    );
}