
import { COLORS, SIZES, FONTS } from '../constants';
import Grid from '@mui/material/Grid'

const buttonStyle = { height: '100%', width: '15%', padding: SIZES.padding, backgroundColor: 'transparent' }

export default function TopBar() {
    return (
        <Grid container spacing={1} className="flex justify-center items-center" style={{ height: '10vh' }}>
            <Grid item style={buttonStyle} className="flex justify-center items-center" >
                <img src={process.env.PUBLIC_URL + '/icons/list.png'} alt="list" style={{ height: '100%', padding: SIZES.paddingA }} />
            </Grid>
            <Grid item style={{ height: '100%', width: '70%', padding: SIZES.padding2 }}>
                <div className="flex justify-center items-center" style={{ height: '100%', backgroundColor: COLORS.lightGray3, borderRadius: SIZES.radius}}>
                    <div style={{ ...FONTS.h4 }}>Monterrey, Mexico</div>
                </div>
            </Grid>
            <Grid item style={buttonStyle} className="flex justify-center items-center" >
                <img src={process.env.PUBLIC_URL + '/icons/shopping-basket.png'} alt="basket" style={{ height: '100%', padding: SIZES.paddingA }} />
            </Grid>
        </Grid >
    );
}
