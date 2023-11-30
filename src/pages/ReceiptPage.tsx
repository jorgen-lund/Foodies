import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PageHeader from '../components/PageHeader';
import Receipt from '../components/receiptPageComponents/Receipt';
import {useTranslation} from 'react-i18next';
import {ReceiptData, fetchReceipts} from '../apiCalls/api';
import emitter from '../receiptUtils';

/** Displays both active and inactive receipts. Fetches the receipts from
 *  the mock api server in the loadReceipts function. Displays placeholder
 *  text in case there are no active or previous orders. 
 */
const ReceiptPage = () => {
  const [activeReceipts, setActiveReceipts] = useState<ReceiptData[]>([]);
  const [inactiveReceipts, setInactiveReceipts] = useState<ReceiptData[]>([]);
  const {t} = useTranslation();

  /* Fetcehs all receipts, and then filters them into two categories, based on
     the orders isActive state. */
  const loadReceipts = async () => {
    try {
      const receipts = await fetchReceipts();
      setActiveReceipts(
        receipts.filter((receipt: {isActive: boolean}) => receipt.isActive),
      );
      setInactiveReceipts(
        receipts.filter((receipt: {isActive: boolean}) => !receipt.isActive),
      );
    } catch (error) {
      console.error('Failed to fetch receipts:', error);
    }
  };

  /* Executes the loadReceipts once when loading the component mounts, and
     then every time a new order has been made, because of the emitter which
     triggers on that specific event. */
  useEffect(() => {
    loadReceipts();
    const handlePurchaseMade = () => {
      loadReceipts();
    };

    emitter.on('purchase-made', handlePurchaseMade);
    return () => {
      emitter.off('purchase-made', handlePurchaseMade);
    };
  }, []);

  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <PageHeader headerText={'Order History'} />
      <ScrollView>
        <View style={[styles.currentOrderContainer]}>
          <Text style={[styles.sectionHeader]}>{t('Active order')}</Text>
          {activeReceipts.length > 0 ? (
            activeReceipts.map(receipt => (
              <Receipt
                key={receipt.id}
                id={receipt.id}
                waitingTime={2}
                date={receipt.date}
                totalCost={receipt.totalCost}
                isActive={receipt.isActive}
                items={receipt.items}
                isTakeaway={receipt.isTakeaway}
              />
            )).reverse()
          ) : (
            <Text style={[styles.text]}>{t('No active orders')}</Text>
          )}
        </View>
        <View style={[styles.currentOrderContainer]}>
          <Text style={[styles.sectionHeader]}>{t('Previous orders')}</Text>
          {inactiveReceipts.length > 0 ? (
            inactiveReceipts.map(receipt => (
              <Receipt
                key={receipt.id}
                id={receipt.id}
                waitingTime={2}
                date={receipt.date}
                totalCost={receipt.totalCost}
                isActive={receipt.isActive}
                items={receipt.items}
                isTakeaway={receipt.isTakeaway}
              />
            )).reverse()
          ) : (
            <Text style={[styles.text]}>{t('No previous orders')}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  currentOrderContainer: {
    marginHorizontal: 20,
  },
  sectionHeader: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 22,
  },
  text: {
    fontFamily: "Suwannaphum-regular", marginTop: -5
  }
});

export default ReceiptPage;
