import { COLORS } from '../constants';

export default function BackgroundImage() {
    return (
        <div style={{ height: '50vh', marginTop: '10vh' }}>
            <img src={process.env.PUBLIC_URL + 'background/bg6.jpg'} alt="list" style={{ marginBottom: '-25vh', width: '100%' }} />
            <div className="grid justify-center rounded-md" style={{ color: COLORS.white, backgroundColor: COLORS.black, height: '10vh' }}>
                <div className="grid justify-center text-4xl font-bold" style={{backgroundColor: COLORS.terciary}} >BURRITO EXPRESS</div>
                <div className="grid justify-center text-xl" style={{backgroundColor: COLORS.terciary}}>📍Avenida Constitución, 43, Monterrey, México.</div>
                <div className="grid justify-center text-xl" style={{backgroundColor: COLORS.terciary}}>🕐 65-75 min</div>
            </div>
        </div>
    )
}