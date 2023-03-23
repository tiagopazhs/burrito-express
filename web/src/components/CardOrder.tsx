import { useState } from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

interface Props {
  items: {
    id: number;
    icon: string;
    name: string;
  }[];
}

export default function CardOrder({ items }: Props) {
  const [selectedOrder, setSelectedOrder] = useState<{ id: number } | undefined>();

  const onSelectOrder = (item: { id: number; icon: string; name: string }) => {
    setSelectedOrder(item);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor: selectedOrder?.id === item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            margin: SIZES.padding / 2,
            flexBasis: '45%',
            flexShrink: 0,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            height: 230,
            position: 'relative', // Adicionado para posicionar o nome sobre a imagem
          }}
          onClick={() => onSelectOrder(item)}
        >
          <img
            src={item.icon}
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: SIZES.radius,
            }}
          />
          <div // Adicionado para exibir o nome do item
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '80%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: SIZES.padding / 2,
              borderBottomLeftRadius: SIZES.radius,
              borderTopRightRadius: SIZES.radius,
            }}
          >
            <span
              style={{
                color: COLORS.white,
                ...FONTS.h4,
              }}
            >
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
