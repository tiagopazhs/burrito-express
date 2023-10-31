import { COLORS } from '../constants';

export default function BackgroundImage() {
    return (
        <div className='relative mt-9 md:mt-10 lg:mt-12 2xl:mt-14'>
            <img className='w-screen h-32 sm:h-36 md:h-40 lg:h-48 xl:h-56 2xl:h-64'
                src={process.env.PUBLIC_URL + '/background/bg6.jpg'} alt="list" />
           <div className="absolute text-center grid justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-screen-sm mx-auto w-48 sm:w-64 md:w-1/2" style={{ color: COLORS.white}}>
                <div className="text-lg font-bold sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl" style={{ backgroundColor: COLORS.terciary }} >BURRITO EXPRESS</div>
                <div className="text-xs sm:text-sm" style={{ backgroundColor: COLORS.terciary }}>📍Avenida Constitución, 43, Monterrey, Nuevo León, México.</div>
                <div className="text-xs sm:text-sm" style={{ backgroundColor: COLORS.terciary }}>🕐 65-75 min</div>
            </div>
        </div>
    )
}