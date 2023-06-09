import { useState } from 'react';
import { COLORS, FONTS } from '../constants';

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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {items.map((item) => (
                <div
                    className='flex-col items-center justify-center text-center cursor-pointer rounded-3xl mr-4 md:mr-8 p-2 md:p-4'
                    key={item.id}
                    style={{
                        backgroundColor: selectedCategory?.id === item.id ? COLORS.primary : COLORS.white,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                    onClick={() => onSelectCategory(item)}
                >
                    <div
                        className='flex items-center justify-center rounded-3xl h-9 md:h-14 w-20 md:w-20'
                        style={{
                            backgroundColor: selectedCategory?.id === item.id ? COLORS.white : COLORS.lightGray,
                        }}
                    >
                        <img
                            className='h-8 md:h-14 w-10 md:w-20'
                            src={item.icon}
                            alt={item.name}
                        />
                    </div>

                    <span
                        className='text-center'
                        style={{
                            color: selectedCategory?.id === item.id ? COLORS.white : COLORS.black,
                            ...FONTS.body5,
                        }}
                    >
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
