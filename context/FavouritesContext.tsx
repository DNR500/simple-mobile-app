import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

interface FavouritesContextInterface {
  favourites: number[];
  isFavourite: (postId: number) => boolean;
  addFavourite: (postId: number) => void;
  removeFavourite: (postId: number) => void;
}

export const FavouritesContext = createContext<FavouritesContextInterface>({
  favourites: [],
  isFavourite: (postId) => false,
  addFavourite: (postId) => {},
  removeFavourite: (postId) => {},
});

interface FavouriteProviderProps {
  children: ReactNode;
}
export const FavouritesProvider = ({ children }: FavouriteProviderProps) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const isFavourite = useCallback((postId: number) => favourites.includes(postId), [favourites]);

  const addFavourite = useCallback(
    (postId: number) => {
      setFavourites((favs) => [...favs, postId]);
    },
    [setFavourites]
  );

  const removeFavourite = useCallback(
    (postId: number) => {
      setFavourites((favs) => favs.filter((f) => f !== postId));
    },
    [setFavourites]
  );

  useEffect(() => {
    const getFavourites = async () => {
      try {
        const favouritesStore = await AsyncStorage.getItem('favourite-posts');
        if (favouritesStore) {
          const favourites = JSON.parse(favouritesStore);
          setFavourites(favourites);
        }
      } catch {
        console.error('Problem accessing AsyncStorage');
      }
    };

    getFavourites();
  }, []);

  useEffect(() => {
    const setFavourites = async (favouritesForStore: number[]) => {
      try {
        await AsyncStorage.setItem('favourite-posts', JSON.stringify(favouritesForStore));
      } catch {
        console.error('Problem accessing AsyncStorage');
      }
    };

    setFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        isFavourite,
        addFavourite,
        removeFavourite,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
