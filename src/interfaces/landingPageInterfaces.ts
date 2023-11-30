import {ImageSourcePropType} from 'react-native';

export interface DealCardProps {
  image: ImageSourcePropType;
  country: string;
  dishName: string;
  onPress?: () => void;
}

export interface FoodCourtCardProps {
  country: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}

export interface SectionTextProps {
  text: string;
  backgroundColor: string;
}
