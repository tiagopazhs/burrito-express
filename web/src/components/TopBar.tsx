
import { COLORS, SIZES, FONTS } from '../constants';

const buttonStyle = { width: '15vw', padding: SIZES.padding, backgroundColor: 'transparent' }

export default function TopBar() {
    return (
        <div className="flex justify-center items-center">
            <button style={buttonStyle}>
                <img src={process.env.PUBLIC_URL + '/icons/list.png'} alt="nearby" />
            </button>

            <div className="flex justify-center items-center" style={{ width: '70vw', backgroundColor: COLORS.lightGray3, borderRadius: SIZES.radius }}>
                <div style={{ ...FONTS.h4 }}>Monterrey, Mexico</div>
            </div>

            <button style={buttonStyle}>
                <img src={process.env.PUBLIC_URL + '/icons/shopping-basket.png'} alt="basket" />
            </button>
        </div>
    );
}
