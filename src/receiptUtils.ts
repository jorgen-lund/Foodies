import {OrderItem} from './redux/shoppingCartSlice';
import mitt from 'mitt';

/* Small event listener, used to check and update receiptPage when a new 
   purchase has been made*/
const emitter = mitt();
export default emitter;

/* Formats the date so it is on the format YY.Month(short)DD HH.MM */
const formatDate = () => {
  const now = new Date();

  const day = now.getDate();
  const month = now.toLocaleString('default', {month: 'short'}).toLowerCase();
  const year = now.getFullYear();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let hoursInString = hours.toString();
  if (hours < 10) {
    hoursInString = `0${hours}`
  }

  let minutesInString = minutes.toString();
  if (minutes < 10) {
    minutesInString = `0${minutes}`;
  }

  const formattedDate = `${day}.${month}.${year} ${hoursInString}:${minutesInString}`;

  return formattedDate;
};

const formattedDate = formatDate();

/* This function takes the orders in the shoppingCart and creates a receipt 
   containing a list of the items with total cost, isActive, isTakeaway and date.
    The receipt will be saved to data.json, and later displayed in the receiptPage.
    Id is automatically given, as assigning one manually lead to errors.
*/
export const createReceiptData = (shoppingCart: OrderItem[], isTakeaway: boolean) => {
  return {
    date: formattedDate,
    totalCost: shoppingCart.reduce((total, item) => total + item.price, 0),
    isActive: true,
    isTakeaway: isTakeaway,
    items: shoppingCart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: item.amount,
    })),
  };
};
