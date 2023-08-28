import { useContext } from 'react';

import { usePosts } from './usePosts';
import { FavouritesContext } from '../context/FavouritesContext';
import { Post } from '../types';

export const useFavouritePosts = () => {
  const favouritesAPI = useContext(FavouritesContext);
  const { data: AllPosts, ...rest } = usePosts();

  return {
    data: AllPosts?.filter((post: Post) => favouritesAPI.favourites.includes(post.id)),
    ...rest,
  };
};
