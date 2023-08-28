import { useCallback, useContext, useMemo } from 'react';

import { FavouritesContext } from '../context/FavouritesContext';

export const useToggleFavourite = (postId: number) => {
  const favouritesAPI = useContext(FavouritesContext);

  const isFavourite = useMemo(
    () => favouritesAPI.isFavourite(postId),
    [postId, favouritesAPI.favourites]
  );

  const toggleFavourite = useCallback(() => {
    if (isFavourite) {
      favouritesAPI.removeFavourite(postId);
    } else {
      favouritesAPI.addFavourite(postId);
    }
  }, [postId, isFavourite]);

  return {
    isFavourite,
    toggleFavourite,
  };
};
