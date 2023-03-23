import CardOrder from './CardOrder';
import { SIZES } from '../constants';

interface Props {}

export default function OrderList({}: Props) {
  const items = [
    { id: 1, icon: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Burritos' },
    { id: 2, icon: 'https://images.pexels.com/photos/8448322/pexels-photo-8448322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Nachos' },
    { id: 3, icon: 'https://images.pexels.com/photos/6399998/pexels-photo-6399998.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Tacos' },
    { id: 4, icon: 'https://images.pexels.com/photos/6400026/pexels-photo-6400026.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Quesadilas' },
    { id: 5, icon: 'https://images.pexels.com/photos/10305696/pexels-photo-10305696.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Guacamoles' },
    { id: 6, icon: 'https://images.pexels.com/photos/4955210/pexels-photo-4955210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Enchiladas' },
    { id: 7, icon: 'https://img.freepik.com/free-photo/mexican-nacho-chips-salsa-dip-bowl_2829-14457.jpg?w=1060&t=st=1679529978~exp=1679530578~hmac=0bf66b5c5974b91c824ad147669e8f09392a06b21fc3c77c1f8c438223544546', name: 'Postres' },
    { id: 8, icon: 'https://images.pexels.com/photos/5255957/pexels-photo-5255957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Bebidas' }
  ];

  return (
    <div style={{width: '100%', marginTop: SIZES.padding2}}>
      <CardOrder items={items}/>
    </div>
  );
}
