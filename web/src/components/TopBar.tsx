
import { COLORS } from '../constants';

export default function TopBar() {
  return (
    <div className="flex justify-between top-0 left-0 right-0 fixed" style={{ height: '10vh', backgroundColor: COLORS.primary}}>
      <div className="flex items-center px-4">
        <img src={process.env.PUBLIC_URL + '/icons/list.png'} alt="list" style={{ height: '55%' }} />
      </div>
      <div className="flex items-center px-4">
        <img src={process.env.PUBLIC_URL + '/icons/shopping-basket.png'} alt="basket" style={{ height: '55%' }} />
      </div>
    </div>
  );
}
