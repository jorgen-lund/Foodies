import {ImageSourcePropType} from 'react-native';

export interface FoodBoothProps {
  boothName: string;
  boothImage: ImageSourcePropType;
  boothDescription: string;
  category1: string;
  category2: string;
  category3?: string;
  dishes: DishCardProps[];
}

export interface ExtraItemProps {
  category: string;
  name: string;
  price: number;
}

export interface DishCardProps {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  allergies: string;
  price: number;
  category: string;
  extraItems?: ExtraItemProps[];
}

export interface CategoriesProps {
  category1: string;
  category2: string;
  category3?: string;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCategory1: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCategory2: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCategory3?: React.Dispatch<React.SetStateAction<boolean>>;
  showAll: boolean;
  showCategory1: boolean;
  showCategory2: boolean;
  showCategory3: boolean;
}

export interface CategoryButtonProps {
  onPress: () => void;
  isActive: boolean;
  categoryName: string;
}

export interface ShopppingCartItemProps {
  id: number;
  dishName: string;
  price: number;
  amount: number;
}
