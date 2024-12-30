import { View } from 'react-native';
import { useState } from 'react'
import { RestaurantItem } from './item'
import {data} from "@/utils/data";

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}

export function RestaurantVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>(data.restaurants)

    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map( item => (
                <RestaurantItem item={item} key={item.id}/>
            ))}
        </View>
    );
}