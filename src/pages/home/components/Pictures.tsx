import { pictures } from "../constants/home.constants";

export default function Pictures() {
    return (
        <div className="grid grid-cols-3 place-items-center gap-1.5 px-1">
            <h1 className="font-bold text-gray text-lg col-span-3">
                Mais de <span className="text-primary">50 anos</span> medindo <span className="text-primary">sonhos</span>
            </h1>

            {pictures.map((picture) => {
                return (
                    <img
                        key={picture.name}
                        src={picture.url}
                        alt={picture.alt}
                        className="rounded-md"
                    />
                );
            })}
        </div>
    );
}