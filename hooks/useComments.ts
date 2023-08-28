import { useQuery } from '@tanstack/react-query';

import { getCommentsForPost } from '../api';

export const useCommentsForPost = (postId: number) =>
  useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsForPost(postId),
  });
