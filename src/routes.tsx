import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo , Feather,Foundation} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Stack = createBottomTabNavigator();

import Favoritos from './pages/Favorites';
import Home from './pages/Home/Home';
import { Details } from './components/Details';

export default function Routes()
{
  const navigation:any = useNavigation();
  const backButton = () =>  
  <Feather 
   name="arrow-left" 
   size={25} 
   style={{marginLeft:15}}
   color={'black'} 
   onPress={()=> navigation.navigate("PokeHome")}
  />
  
  const configIcon = (size:any, color:any,iconName:any) => 
    <Foundation name={iconName} size={size} color={color} />;
  
  return(
    <Stack.Navigator
    initialRouteName="Home"
     screenOptions={{
      
       tabBarStyle:{
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
        paddingBottom : 5 ,
        paddingTop: 5 ,
      },
      tabBarActiveTintColor:'red',
     }}
    >
      
      <Stack.Screen
       name="PokeHome" 
       component={Home}
       options={{
        tabBarIcon:({size, color}) => configIcon(size, color,'home')
       }}
       />
      
      <Stack.Screen
       name="Favoritos"
       component={Favoritos}
       options={{
        tabBarIcon:({size, color}) => configIcon(size, color,'heart'),
        headerLeft:backButton,
       }}
       />

      <Stack.Screen
       name="Pokemon"
       component={Details}
       options={{
         tabBarItemStyle:{display:'none'},
         headerLeft:backButton,
       }}
       />
    </Stack.Navigator>
  )
}