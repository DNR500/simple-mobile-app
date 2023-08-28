import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { IconButton } from '../components/IconButton';
import { PostList } from '../components/PostList';
import { useFavouritePosts } from '../hooks/useFavouritePosts';
import { usePosts } from '../hooks/usePosts';
import { FontSize } from '../theme/styles';

const Tab = createBottomTabNavigator();

const ListAllPosts = () => {
  const { data, isLoading, isError } = usePosts();

  return <PostList posts={data} isLoading={isLoading} isError={isError} />;
};

const ListFavouritePosts = () => {
  const { data, isLoading, isError } = useFavouritePosts();

  return <PostList posts={data} isLoading={isLoading} isError={isError} />;
};

export function PostsListScreen() {
  const queryClient = useQueryClient();

  const onRefreshPressed = useCallback(() => {
    queryClient.invalidateQueries();
  }, [queryClient]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllPosts"
        component={ListAllPosts}
        options={{
          headerTitle: 'All Posts',
          tabBarLabel: 'All Posts',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list-outline" />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="refresh"
              color={tintColor}
              size={FontSize.xl}
              onPress={onRefreshPressed}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={ListFavouritePosts}
        options={{
          headerTitle: 'Favourites',
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
