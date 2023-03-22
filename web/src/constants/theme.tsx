export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2", // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: "#898C95",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    radiusCategory: 20,
    paddingA: 5,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width: '100vw',
    height: '100vh'
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle},
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1},
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2},
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3},
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4},
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1},
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2},
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3},
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4},
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5},
};

export interface AppTheme {
    COLORS: typeof COLORS;
    SIZES: typeof SIZES;
    FONTS: typeof FONTS;
}

const appTheme: AppTheme = { COLORS, SIZES, FONTS };

export default appTheme;
