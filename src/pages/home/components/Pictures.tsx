import { pictures } from "../constants/home.constants";

export default function Pictures() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-1 py-6 md:py-6">
            <h1 className="font-bold text-gray text-lg md:text-3xl lg:text-3xl col-span-3 lg:mb-8">
                Mais de <span className="text-primary">50 ANOS</span> medindo <span className="text-primary">SONHOS</span>!
            </h1>
            <div className="grid grid-cols-3 gap-1.5 md:gap-6 lg:gap-12">
                {pictures.map((picture, index) => {
                    return (
                        <img
                            key={index}
                            src={picture.url}
                            alt={picture.alt}
                            className="rounded-md lg:w-[400px]"
                        />
                    );
                })}
            </div>
        </div>
    );
}