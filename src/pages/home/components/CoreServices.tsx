import { FaHouseDamage } from 'react-icons/fa';
import { FaHouseCircleCheck } from "react-icons/fa6";
import { BsFillHouseExclamationFill } from "react-icons/bs";

import { coreServices } from "../constants/home.constants";

export default function CoreServices() {
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
            case "Retificação de imóveis":
                return <BsFillHouseExclamationFill color='#F5AF4F' size={iconSize} />
            case "Desmembramento de imóveis":
                return <FaHouseDamage color='#F5AF4F' size={iconSize} />
            case "Usucapião e REURB":
                return <FaHouseCircleCheck color='#F5AF4F' size={iconSize} />
            default:
                return <BsFillHouseExclamationFill color='#F5AF4F' size={iconSize} />
        }
    }

    return (
        <div className="bg-primary text-white grid grid-cols-3 place-items-center gap-1.5 md:px-10 py-6 md:py-10 lg:py-20 lg:px-[180px]">
            <h1 className="font-bold  text-lg md:text-3xl col-span-3 mb-6 md:mb-16">
                Principais Serviços
            </h1>

            {coreServices.map((service, index) => (
                <div className="flex flex-col items-center w-[100px] gap-1.5" key={index}>
                    {getIcon(service.title)}
                    <h2 className="text-md2 md:text-2xl text-center">{service.title}</h2>
                </div>
            ))}
        </div>
    );
}