import { contacts } from "../constants/home.constants";
import ArrowIcon from "../../../../public/assets/contacts/arrow.png"

export default function Contact() {
    return (
        <div className="bg-primary flex items-center space-x-6 px-2 py-5 h-[200px] ">
            <div className='text-white flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[12px]'>Entre em contato conosco</h1>
                <p className='text-xxs mb-1 text-center'>e faça o seu orçamento</p>
                <img src={ArrowIcon} alt="Seta apontando para a direita" className="w-10" />
            </div>

            <div>
                {contacts.map((contact) => {
                    return (
                        <a href={contact.link} target="_blank">
                            <span className="flex items-center gap-1 mb-1 text-white">
                                <img src={contact.icon} alt={contact.content} className="w-7" />
                                <h3 className="text-xs">{contact.content}</h3>
                            </span>
                        </a>

                    );
                })}
            </div>
        </div>
    );
}