import { services } from "../constants/home.constants";

export default function Services() {
    return (
        <div>
            <div className="grid grid-cols-3 place-items-center gap-1.5 px-1">
                <h1 className="font-bold text-gray text-lg col-span-3 mb-3">
                    Conheça nossos Serviços
                </h1>

                {services.map((service) => {
                    return (
                        <div className="flex flex-col items-center gap-2">
                            <img src={service.imageUrl} alt={service.title} className="w-11" />
                            <h2 className="font-bold text-gray">{service.title}</h2>
                            <p className="text-xxs text-center">{service.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}