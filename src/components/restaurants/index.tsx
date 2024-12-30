import { FlatList } from 'react-native';
import { useState  } from 'react'
import { RestaurantItem } from './horizontal'
import {data} from "@/utils/data";

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}
export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>(data.restaurants);

    return (
        <FlatList
            data={restaurants}
            renderItem={ ({ item }) => <RestaurantItem item={item} /> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
            showsHorizontalScrollIndicator={false}
        />
    );
}