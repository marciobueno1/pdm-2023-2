import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./screens/HomeScreen";
import { ScoreScreen } from "./screens/ScoreScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ServerScoreScreen } from "./screens/ServerScoreScreen";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Score" component={ScoreScreen} />
          <Stack.Screen name="ServerScore" component={ServerScoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
