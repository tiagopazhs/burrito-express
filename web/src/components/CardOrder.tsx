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
                        backgroundColor: selectedOrder?.id === item.id ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: SIZES.padding2 * 3,
                        marginLeft: SIZES.padding * 2,
                        marginRight: SIZES.padding * 2,
                        flexBasis: '45%',
                        flexShrink: 0,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        cursor: 'pointer',
                        position: 'relative',
                        height: 230,
                        overflow: 'hidden',
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
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '75%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            padding: SIZES.padding / 2,
                            borderBottomLeftRadius: SIZES.radius,
                            borderTopRightRadius: SIZES.radius,
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <span style={{ color: COLORS.white }}>{item.name}</span>
                        <div style={{ width: '4%', display: 'flex', alignItems: 'center' }}>
                            <img
                                src={'../icons/star.png'}
                                alt={'star'}
                                style={{ marginBottom: SIZES.padding / 2.1 , marginRight: SIZES.padding }}
                            />
                            <span style={{ color: COLORS.white }}>4.8</span>
                        </div>
                        <h2 style={{ color: COLORS.white }}><b>43$</b></h2>
                    </div>

                </div>
            ))}
        </div>
    );
}
