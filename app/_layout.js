import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";


import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
const Layout = () => {
    // const [fontsLoaded] = useFonts({
    //     DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    //     DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    //     DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    // })

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded])


    // if (!fontsLoaded) {
    //     console.log('!fontsLoaded', fontsLoaded)
    //     return null;
    // }

    // console.log(onLayoutRootView)

    // const onLayoutRootView = async () => {
    //     await SplashScreen.hideAsync();
    // }

    SplashScreen.hideAsync();

    // return <Stack onLayout={onLayoutRootView} />
    return <Stack />
}

// const Layout=()=>{
//     return<Stack/>
// }

export default Layout;