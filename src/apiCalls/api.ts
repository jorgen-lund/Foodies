import {OrderItem} from '../redux/shoppingCartSlice';

const API_BASE_URL = 'http://localhost:3000';

export interface ReceiptData {
  id: number,
  date: string;
  totalCost: number;
  isActive: boolean;
  isTakeaway: boolean;
  items: OrderItem[];
}

/* Posts the order as a receipt to the data.json file, which acts
   as the json-mockserver  */
export const postReceiptData = async (data: ReceiptData) => {
  try {
    console.log('TRYING TO SAVE RECEIPT....');
    const response = await fetch(`${API_BASE_URL}/receipts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to save receipt data');
    } else {
      console.log('RECEIPT SAVED AND MADE ACTIVE...');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

/* Turns the previous active receipt into an inactive one */
export const deactivatePreviousReceipt = async () => {
  try {
    const receipts = await fetchReceipts();
    const activeReceipt = receipts.find(
      (receipt: {isActive: boolean}) => receipt.isActive,
    );

    if (activeReceipt) {
      await fetch(`${API_BASE_URL}/receipts/${activeReceipt.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({isActive: false}),
      });
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

/* Gets all the receipts */
export const fetchReceipts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/receipts`);
    if (!response.ok) {
      throw new Error('Failed to fetch receipts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
