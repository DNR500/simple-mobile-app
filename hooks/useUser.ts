import { useQuery } from '@tanstack/react-query';

import { getUser } from '../api';

export const useUser = (id: number) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => getUser(id),
  });
