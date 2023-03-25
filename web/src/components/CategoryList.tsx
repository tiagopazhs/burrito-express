import CardCategory from './CardCategory';
import { SIZES } from '../constants';

interface Props {}

export default function CategoryList({}: Props) {
  const items = [
    { id: 1, icon: 'https://cdn-icons-png.flaticon.com/512/6121/6121438.png', name: 'Burritos' },
    { id: 2, icon: 'https://cdn-icons-png.flaticon.com/512/6228/6228350.png', name: 'Nachos' },
    { id: 3, icon: 'https://cdn-icons-png.flaticon.com/512/8803/8803824.png', name: 'Tacos' },
    { id: 4, icon: 'https://cdn-icons-png.flaticon.com/512/4177/4177697.png', name: 'Quesadilas' },
    { id: 5, icon: 'https://cdn-icons-png.flaticon.com/512/4727/4727290.png', name: 'Guacamoles' },
    { id: 6, icon: 'https://cdn-icons-png.flaticon.com/512/5426/5426465.png', name: 'Enchiladas' },
    { id: 7, icon: 'https://cdn-icons-png.flaticon.com/512/1375/1375228.png', name: 'Postres' },
    { id: 8, icon: 'https://cdn-icons-png.flaticon.com/512/2738/2738730.png', name: 'Bebidas' }
  ];

  return (
    <div style={{width: '100%', paddingLeft: SIZES.padding}}>
      <CardCategory items={items}/>
    </div>
  );
}
