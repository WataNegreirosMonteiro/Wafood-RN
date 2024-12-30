import {ScrollView, Text, View} from "react-native";
import {Header} from "@/components/header";

import Constants from "expo-constants";
import {Banner} from "@/components/banner";
import {Search} from "@/components/search";
import {Section} from "@/components/section";
import {TrendingFoods} from "@/components/treding";
import {Restaurants} from "@/components/restaurants";
import {RestaurantVerticalList} from "@/components/list";

const statusBarHeight = Constants.statusBarHeight;
export default function Index() {

    return (
        <ScrollView className='h-screen px-4 bg-slate-200' showsVerticalScrollIndicator={false}>
            <View className='w-full' style={{marginTop: statusBarHeight}}>
                <Header/>
                <Banner/>
                <Search />
            </View>

            <Section
                name="Mais procurados"
                label="Veja mais"
                size="text-2xl"
            />
            <TrendingFoods />

            <Section
                name="Principais restaurantes"
                label="Veja mais"
                size="text-xl"
            />
            <Restaurants />

            <Section
                name="Os maiores descontos"
                label="Veja mais"
                size="text-2xl"
            />
            <TrendingFoods />

            <Section
                name="Confira mais"
                label="Veja mais"
                size="text-xl"
            />
            <RestaurantVerticalList />
        </ScrollView>
    )
}