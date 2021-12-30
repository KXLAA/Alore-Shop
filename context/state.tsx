import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Product } from 'types/types';

interface AppContextInterface {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  addToCart: (item: Product) => void;
  removeItem: (item: Product) => void;
}

const AppContext = createContext({} as AppContextInterface);

export function AppWrapper({
  children,
}: React.PropsWithChildren<Record<never, any>>) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const summarizeCart = (cart: Product[]): Product[] => {
    const groupedItems = cart.reduce((summary, item) => {
      //Create new object with the id of cart item as the key and the cart item itself a value

      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0, //Add new count property
      };
      summary[item.id].count++; //Increment count property every time, object appears
      return summary;
    }, {});
    //Return only the values of the new object ie the cart item with the new count property
    return Object.values(groupedItems);
  };

  const removeItem = (item: Product) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  const sharedState: AppContextInterface = {
    cart: summarizeCart(cart),
    setCart: setCart,
    addToCart: addToCart,
    removeItem: removeItem,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
