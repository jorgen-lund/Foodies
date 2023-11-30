export interface OrderInfoProps {
  totalPrice: number;
  setIsTakeaway: React.Dispatch<React.SetStateAction<boolean>>;
  onPress: () => void;
}

export interface ShoppingCartItemProps {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface ShoppingItemButtonProps {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
  isRemoveButton: boolean;
}
