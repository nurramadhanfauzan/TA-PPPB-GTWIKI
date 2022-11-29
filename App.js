import HeroScreen from "./pages/HeroScreen";
import AboutScreen from "./pages/AboutScreen";
import NormalScreen from "./hero/NormalScreen";
import RareScreen from "./hero/RareScreen";
import UniqScreen from "./hero/UniqScreen";
import DetailNormalScreen from "./detail/DetailNormalScreen";
import DetailRareScreen from "./detail/DetailRareScreen";
import DetailUniqScreen from "./detail/DetailUniqScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground, View  } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const image = { uri : "https://wallpaperaccess.com/full/7519451.jpg" }

function TabNavigator() {
  return(
    <BottomTab.Navigator screenOptions={{ headerShown: false, navigationBarColor: "#ffaaff"  }}>
        <BottomTab.Screen 
          name="Hero" 
          component={HeroScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="sword-cross" color={color} size={26} />
            ),
          }} />
          <BottomTab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
          }} />
      </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground 
        source={image} 
        resizeMode="cover"
        style={{flex: 1, justifyContent: "center"}}
      >
        <NavigationContainer theme={{colors: { background: 'transparent', card: 'rgb(170,146,118)' }}}>
          <Stack.Navigator screenOptions={{ headerShown: true }} >
            <Stack.Screen name="Guardian Tales Hero Information" component={TabNavigator} />
            <Stack.Screen name="Hero" component={HeroScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Normal Hero" component={NormalScreen} />
            <Stack.Screen name="Rare Hero" component={RareScreen} />
            <Stack.Screen name="Uniq Hero" component={UniqScreen} />
            <Stack.Screen name="Detail Normal Hero" component={DetailNormalScreen} />
            <Stack.Screen name="Detail Rare Hero" component={DetailRareScreen} />
            <Stack.Screen name="Detail Uniq Hero" component={DetailUniqScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}