import { createContext, ReactNode, useContext, useState } from "react";

type MenuBagProviderProps = {
    children: ReactNode
}

type MenuContext = {
    getItemQuantity: (id: number) => number
    increaseBagQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromBag: (id: number) => void
    bagQuantity: number
    bagItems: BagItem[]
}

type BagItem = {
    id: number
    quantity: number
}

const MenuContext = createContext({} as MenuContext)

export function useMenuBag() {
    return useContext(MenuContext)
};

export function MenuBagProvider({ children }:
    MenuBagProviderProps) {
    const [bagItems, setBagItems] = useState<BagItem[]>([])

    const bagQuantity = bagItems.reduce(
        (quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id: number) {
        return bagItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseBagQuantity(id: number): void {
        const itemToUpdate = findItemById(id);

        if (itemToUpdate) {
            updateItemQuantity(itemToUpdate);
        } else {
            addItemToBag(id);
        }
    };

    function findItemById(id: number): BagItem | undefined {
        return bagItems.find(item => item.id === id);
    };

    function updateItemQuantity(itemToUpdate: BagItem): void {
        setBagItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === itemToUpdate.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    };

    function addItemToBag(id: number): void {
        setBagItems(prevItems => {
            return [...prevItems, { id, quantity: 1 }];
        });
    };

    //???????

    function decreaseItemQuantity(id: number) {
        setBagItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    };

    function removeFromBag(id: number) {
        setBagItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        < MenuContext.Provider
            value={{
                getItemQuantity,
                increaseBagQuantity,
                decreaseItemQuantity,
                removeFromBag,
                bagItems,
                bagQuantity,
            }} >
            {children}
        </ MenuContext.Provider >
    )
};