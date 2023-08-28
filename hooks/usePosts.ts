import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

import { getPosts } from '../api';
import { FavouritesContext } from '../context/FavouritesContext';
import { Post } from '../types';

export const usePosts = () => {
  const favouritesAPI = useContext(FavouritesContext);

  const { data: AllPosts, ...rest } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return {
    data: AllPosts?.sort((a: Post, b: Post) => {
      const isAFavourite = favouritesAPI.isFavourite(a.id);
      const isBFavourite = favouritesAPI.isFavourite(b.id);

      if (isAFavourite && !isBFavourite) {
        return -1;
      } else if (!isAFavourite && isBFavourite) {
        return 1;
      }
      return 0;
    }),
    ...rest,
  };
};
