import { useState } from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

interface Props {
    items: {
        id: number;
        icon: string;
        name: string;
    }[];
}


export default function CardCategory({ items }: Props) {

    const [selectedCategory, setSelectedCategory] = useState<{ id: number } | undefined>();

    const onSelectCategory = (item: { id: number; icon: string; name: string }) => {
        setSelectedCategory(item);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor:
                            selectedCategory?.id === item.id ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radiusCategory,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={() => onSelectCategory(item)}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor:
                                selectedCategory?.id === item.id ? COLORS.white : COLORS.lightGray,
                        }}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </div>

                    <span
                        style={{
                            marginTop: SIZES.padding,
                            color: selectedCategory?.id === item.id ? COLORS.white : COLORS.black,
                            ...FONTS.body5,
                            textAlign: 'center',
                        }}
                    >
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
