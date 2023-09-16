import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: `itemId = ${route.params.itemId}`,
            headerTintColor: "#f00",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
