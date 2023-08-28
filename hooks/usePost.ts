import { useQuery } from '@tanstack/react-query';

import { getPost } from '../api';

export const usePost = (id: number) =>
  useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
  });
