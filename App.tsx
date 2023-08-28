import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

import { FavouritesProvider } from './context/FavouritesContext';
import { PostsDetailScreen } from './screens/PostDetailScreen';
import { PostsListScreen } from './screens/PostListScreen';
import { Colors } from './theme/styles';
import { RootStackParamList } from './types';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary50 },
              headerTintColor: Colors.textWhite,
            }}>
            <Stack.Screen
              name="PostList"
              component={PostsListScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PostDetail"
              component={PostsDetailScreen}
              options={{ title: 'Post Details' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesProvider>
    </QueryClientProvider>
  );
}
