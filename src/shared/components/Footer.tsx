import { FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

import logo from "../../../public/assets/logos/logo.png"

export default function Footer() {
    return (
        <div className="grid grid-cols-3 h-[130px]">
            <div className="flex items-center ml-1.5">
                <img className="h-10 inline" src={logo} alt="Logo" />
            </div>
            <div className="text-xs">
                <h2 className="font-bold text-xs">CONTATE-NOS</h2>
                <span className="flex items-center gap-1 mt-3">
                    <FaSquareWhatsapp size={20} />
                    <a href="tel:+554899534526" target="_blank">+55 (48) 99953-4526</a>
                </span>
                <span className="flex items-center gap-1 mt-2">
                    <FaPhoneSquareAlt size={20} />
                    <a href="tel:+554836240617" target="_blank">+55 (48) 3624-0617</a>
                </span>
                <span className="flex items-center gap-1 mt-2">
                    <FaSquareInstagram size={20} />
                    <a href="https://www.instagram.com/orlandoengenheiro/" target="_blank">@orlandoengenheiro</a>
                </span>
            </div>
            <div className="text-xs ml-6">
                <h2 className="font-bold text-xs">NAVEGAÇÃO</h2>
                <span className="flex items-center mt-3">
                    <a href="#initial-section">Página Inicial</a>
                </span>
                <span className="flex items-center mt-2">
                    <a href="#about-section">Quem Somos</a>
                </span>
                <span className="flex items-center mt-2">
                    <a href="#localization-section">Localização</a>
                </span>
                <span className="flex items-center mt-2">
                    <a href="#services-section">Serviços</a>
                </span>
            </div>
        </div>
    );
}