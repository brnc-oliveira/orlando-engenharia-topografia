import { about } from '../constants/home.constants';

export default function About() {
 return (
  <div className='bg-primary flex items-center justify-between gap-3 lg:gap-12 px-2 md:px-10 lg:px-[180px] max-[360px]:py-2 py-8 md:py-14'>
   <img src={about.url} alt={about.alt} className='w-40 md:w-[300px] lg:w-[400px]' />

   <div className='text-white'>
    <h1 className='font-bold text-md md:text-3xl lg:text-3xl mb-2'>Quem somos</h1>
    <p className='text-xxs md:text-lg lg:text-lg mb-1'>
     Nossa história começa em 1973, quando Orlando Mendes iniciou sua carreira na Camargo Corrêa.
     Ele acumulou experiência em diversas empresas renomadas, como Mendes Júnior e Copovel, e
     trabalhou como engenheiro agrimensor na Prefeitura de Orleans e na Eliane Cerâmica.
    </p>
    <p className='text-xxs md:text-lg lg:text-lg my-3'>
     Durante 30 anos, Orlando serviu na Prefeitura de Jaguaruna e também lecionou na Universidade
     UNESC de 1987 a 2001.
    </p>
    <p className='text-xxs md:text-lg lg:text-lg my-3'>
     Prestando serviços nas cidades de Braço do Norte, Araranguá, Tubarão e Jaguaruna. Seu
     compromisso com a excelência e a dedicação à profissão são inspirações que guiam nossa empresa
     até hoje.
    </p>
   </div>
  </div>
 );
}
