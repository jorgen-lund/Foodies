import {OrderItem} from '../redux/shoppingCartSlice';

export interface ReceiptProps {
  id: number;
  waitingTime: number;
  date: string;
  totalCost: number;
  isActive: boolean;
  isTakeaway: boolean;
  items: OrderItem[];
}

export interface ReceiptTopProps {
    id: number;
    waitingTime: number;
    isActive: boolean;
    isTakeaway: boolean;
  }

export interface ReceiptMidProps {
  textColor: string;
  borderColor: string;
  date: string;
  totalCost: number;
  isActive: boolean;
}

export interface ReceiptOrderProps {
  amount: number;
  dish: string;
  price: number;
  isActive: boolean;
}
