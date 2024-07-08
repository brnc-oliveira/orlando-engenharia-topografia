import { contacts } from "../constants/home.constants";
import ArrowIcon from "../../../../public/assets/contacts/arrow.png"

export default function Contact() {
    return (
        <div className="bg-primary flex items-center justify-between md:px-[80px] lg:px-[300px] space-x-6 px-2 py-4 md:py-14">
            <div className='text-white flex flex-col items-center justify-center'>
                <h1 className='font-bold max-[360px]:text-[11px] text-[13px] md:text-2xl lg:text-3xl'>Entre em contato conosco</h1>
                <p className='mb-1 text-center max-[360px]:text-xxs text-xs md:text-lg lg:text-lg'>e faça o seu orçamento</p>
                <img src={ArrowIcon} alt="Seta apontando para a direita" className="w-10 md:w-[70px] lg:w-[80px]" />
            </div>

            <div>
                {contacts.map((contact, index) => {
                    return (
                        <a href={contact.link} target="_blank" key={index}>
                            <span className="flex items-center gap-1 mb-1 md:mb-4 lg:mb-6 text-white">
                                <img src={contact.icon} alt={contact.content} className="max-[360px]:w-5 w-7 md:w-9" />
                                <h3 className="text-xxs md:text-lg">{contact.content}</h3>
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}