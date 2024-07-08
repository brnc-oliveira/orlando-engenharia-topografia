import { about } from "../constants/home.constants";

export default function About() {
    return (
        <div className="bg-primary flex items-center justify-between gap-3 lg:gap-12 px-2 md:px-10 lg:px-[180px] max-[360px]:py-2 py-8 md:py-14">
            <img src={about.url} alt={about.alt} className='w-40 md:w-[300px] lg:w-[400px]' />

            <div className='text-white'>
                <h1 className='font-bold text-md md:text-3xl lg:text-3xl mb-2'>Quem somos</h1>
                <p className='text-xxs md:text-lg lg:text-lg mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.</p>
            </div>
        </div>
    );
}