import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import logo from "../../../public/assets/logos/logo.png"

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-white lg:flex md:items-center md:justify-between shadow-lg">
            <div className="flex justify-between items-center p-4">
                <span className="text-2xl font-[Poppins] cursor-pointer">
                    <a href="#initial-section">
                        <img className="h-12 md:h-14 inline" src={logo} alt="Logo" />
                    </a>
                </span>

                <span className="text-3xl cursor-pointer mx-2 lg:hidden block" onClick={toggleMenu}>
                    {menuIsOpen ? <IoClose /> : <IoMenu />}
                </span>
            </div>

            <ul className={`${menuIsOpen && 'top-[80px] opacity-100'} lg:flex lg:items-center z-[-1] lg:z-10 lg:static absolute bg-white w-full lg:w-auto lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 flex flex-col lg:flex-row items-center justify-center`}>
                <li className="mx-4 my-2 md:my-0">
                    <a href="#initial-section" onClick={toggleMenu} className="text-lg hover:text-cyan-500 duration-500">Página Inicial</a>
                </li>
                <li className="mx-4 my-2 md:my-0">
                    <a href="#about-section" onClick={toggleMenu} className="text-lg hover:text-cyan-500 duration-500">Quem Somos</a>
                </li>
                <li className="mx-4 my-2 md:my-0">
                    <a href="#localization-section" onClick={toggleMenu} className="text-lg hover:text-cyan-500 duration-500">Localização</a>
                </li>
                <li className="mx-4 my-2 md:my-0">
                    <a href="#services-section" onClick={toggleMenu} className="text-lg hover:text-cyan-500 duration-500">Serviços</a>
                </li>

                <button className="flex items-center gap-1 bg-secound duration-500 px-7 py-3 mx-4 my-2 hover:bg-primary rounded">
                    <a href="#contact-section" onClick={toggleMenu}>
                        Entre em Contato
                    </a>
                    <FaArrowRight />
                </button>
            </ul>
        </nav>
    );
}
