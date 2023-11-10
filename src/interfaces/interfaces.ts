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

export interface DishCardProps {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  allergies: string;
  price: number;
  category: string,
}

export interface CategoriesProps {
  category1: string;
  category2: string;
  category3?: string;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCategory1: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCategory2: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCategory3?: React.Dispatch<React.SetStateAction<boolean>>;
}
