import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import Hii from './Hii';



const Stack = createNativeStackNavigator();

function StackPage() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="Hii"
        component={Hii}
        options={{
          title: 'My profile',
        }}
      />
      
      
    </Stack.Navigator>
  );
}

export default StackPage;