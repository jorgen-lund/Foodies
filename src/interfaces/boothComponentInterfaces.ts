import {ImageSourcePropType} from 'react-native';

/* Booth Specific interfaces: */
export interface FoodBoothProps {
  boothName: string;
  boothImage: ImageSourcePropType;
  boothDescription: string;
  category1: string;
  category2: string;
  category3?: string;
  dishes: DishCardProps[];
}

export interface BoothDescriptionProps {
  boothName: string;
  boothImage: ImageSourcePropType;
  boothDescription: string;
}

export interface BoothNavbarButtonProps {
  onPress: () => void;
  boothName: string;
  activeBoothName: string;
}

export interface BoothNavbarProps {
  activeBoothName: string;
}

/* Category specific interfaces: */
export interface CategoryButtonProps {
  onPress: () => void;
  isActive: boolean;
  categoryName: string;
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

/* DishCard specific interfaces: */
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

export interface DishInformationProps {
  name: string;
  description: string;
  allergies: string;
}

export interface DishButtonProps {
  onPress: () => void;
  MaterialIconName: string;
}

/* Extras specific interfaces: */
export interface ExtrasProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  extraItems: ExtraItemProps[];
}

export interface ExtraItemProps {
  category: string;
  name: string;
  price: number;
}

export interface CheckboxItemProps {
  itemName: string;
  price: number;
}
