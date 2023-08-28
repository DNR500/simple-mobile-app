import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';

import { deletePost } from '../api';
import { FavouritesContext } from '../context/FavouritesContext';
import { Post } from '../types';

const removePostById = (postId: number, posts: Post[]) =>
  posts.filter((post) => post.id !== postId);
export const useDelete = (postId: number, onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient();
  const favouritesApi = useContext(FavouritesContext);
  return useMutation(deletePost, {
    onSuccess: () => {
      const oldPosts = queryClient.getQueryData(['posts']);
      const newPosts = removePostById(postId, oldPosts as Post[]);

      if (oldPosts) {
        queryClient.setQueriesData(['posts'], newPosts);
      }

      if (favouritesApi.isFavourite(postId)) {
        favouritesApi.removeFavourite(postId);
      }

      onSuccess();
    },
    onError: () => {
      onError();
    },
  });
};
