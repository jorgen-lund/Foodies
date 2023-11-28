import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';

export type BoothStackParamList = {
  ItalianBooth: undefined;
  IndianBooth: undefined;
  MexicanBooth: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  BoothNavigator: NavigatorScreenParams<BoothStackParamList> | undefined;
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
