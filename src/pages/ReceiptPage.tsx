import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PageHeader from '../components/PageHeader';
import Receipt from '../components/receiptPageComponents/Receipt';
import {useTranslation} from 'react-i18next';
import {ReceiptData, fetchReceipts} from '../apiCalls/api';
import emitter from '../receiptUtils';

const ReceiptPage = () => {
  const [activeReceipts, setActiveReceipts] = useState<ReceiptData[]>([]);
  const [inactiveReceipts, setInactiveReceipts] = useState<ReceiptData[]>([]);
  const {t} = useTranslation();

  const loadReceipts = async () => {
    try {
      const receipts = await fetchReceipts();
      console.log(receipts);
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
          {activeReceipts.map(receipt => (
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
          ))}
        </View>
        <View style={[styles.currentOrderContainer]}>
          <Text style={[styles.sectionHeader]}>{t('Previous orders')}</Text>
          {inactiveReceipts
            .map(receipt => (
              <Receipt
                key={receipt.id}
                id={receipt.id}
                waitingTime={2}
                date={receipt.date}
                totalCost={receipt.totalCost}
                isActive={receipt.isActive}
                items={receipt.items}
              />
            ))
            .reverse()}
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
});

export default ReceiptPage;
