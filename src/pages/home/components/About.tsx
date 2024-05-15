import { about } from '../constants/home.constants'

export default function About() {
    return (
        <div className="bg-primary flex items-center gap-3 px-2 py-5 h-[200px] ">
            <img src={about.url} alt={about.alt} className='w-40' />

            <div className='text-white'>
                <h1 className='font-bold text-md mb-2'>Quem somos</h1>
                <p className='text-xxs mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio. </p>
            </div>
        </div>
    );
}