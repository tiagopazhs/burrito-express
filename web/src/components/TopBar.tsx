import { COLORS } from '../constants';

export default function TopBar() {
  return (
    <div className="h-9 md:h-10 lg:h-12 2xl:h-14 flex justify-between top-0 left-0 right-0 fixed" style={{ backgroundColor: COLORS.primary }}>
      <div className="flex items-center px-4">
        <img className="h-5 md:h-6 lg:h-7 2xl:h-9" src={process.env.PUBLIC_URL + '/icons/list.png'} alt="list" />
      </div>
      <div className="flex items-center px-4">
        <img className="h-5 md:h-6 lg:h-7 2xl:h-9"src={process.env.PUBLIC_URL + '/icons/shopping-basket.png'} alt="basket"/>
      </div>
    </div>
  );
}
