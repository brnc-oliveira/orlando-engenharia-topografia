import { FaSearchLocation } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillHouseExclamationFill } from "react-icons/bs";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiNotebookBold } from "react-icons/pi";

import { othersServices } from "../constants/home.constants";

export default function OthersServices() {
    const screenSize = window.screen.width;

    function getIconSize(): number {
        if (screenSize <= 420) {
            return 30;
        } else if (screenSize <= 820) {
            return 45;
        } else if (screenSize <= 1536) {
            return 60;
        } else if (screenSize <= 1920) {
            return 65;
        } else {
            return 20;
        }
    }

    function getIcon(title: string) {
        const iconSize = getIconSize()

        switch (title) {
            case "Levantamento Topográfico":
                return <MdOutlineContentPasteSearch color='#F5AF4F' size={iconSize} />;
            case "Levantamento Planialtimetrico":
                return <MdOutlineContentPasteSearch color='#F5AF4F' size={iconSize} />;
            case "Cadastro Técnico Mobiliário":
                return <PiNotebookBold color='#F5AF4F' size={iconSize} />;
            case "Divisão de Terras e Locação":
                return <FaHouseCircleCheck color='#F5AF4F' size={iconSize} />;
            case "Regularização de Áreas":
                return <FaHouseCircleExclamation color='#F5AF4F' size={iconSize} />;
            case "Localização de Lotes":
                return <FaSearchLocation color='#F5AF4F' size={iconSize} />;
            case "Georreferenciamento":
                return <FaMapLocationDot color='#F5AF4F' size={iconSize} />;
            case "Execução e Protestos de Loteamento":
                return <FaLaptopHouse color='#F5AF4F' size={iconSize} />;
            default:
                return <BsFillHouseExclamationFill color='#F5AF4F' size={iconSize} />;
        }
    }

    return (
        <div className="text-gray grid grid-cols-3 spa place-items-center gap-y-3 lg:gap-y-10 px-2 md:px-10 py-5 md:py-6 lg:py-12 lg:px-[180px]">
            <h1 className="font-bold  text-lg md:text-3xl col-span-3 mb-3 md:mb-10">
                Outros Serviços
            </h1>

            {othersServices.map((service, index) => (
                <div className="flex flex-col items-center w-[100px] lg:w-[300px] gap-1.5" key={index}>
                    {getIcon(service.title)}
                    <h2 className="text-md2 md:text-xl text-center">{service.title}</h2>
                </div>
            ))}
        </div>
    );
}