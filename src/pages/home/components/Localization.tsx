export default function Localization() {
    return (
        <div className="flex flex-col items-center gap-5 text-gray">
            <div>
                <h1 className='font-bold text-lg text-center'>Nossa Localização</h1>
                <p className='text-xxs text-center'>Venha nos visitar, ficaremos felizes em recebê-lo!</p>
            </div>

            <div className="flex items-center flex-col justify-center">
                <h2 className='font-bold text-xs text-center mb-3'>Av. Duque de Caxias, 76 - (Piso 2), Jaguaruna - SC</h2>
                <div className="w-full flex justify-center">
                    <iframe
                        className="w-full h-[200px] rounded-xl"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-28.614615999384,%20-49.02552001674529+(Orlando%20Engenharia%20e%20Topografia)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.gps.ie/">gps tracker sport</a>
                    </iframe>
                </div>
            </div>
        </div>
    );
}
