import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PageHeader from './PageHeader';
import Receipt from './receiptPageComponents/Receipt';

const ReceiptPage = () => {
  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <PageHeader headerText={'Order History'} />
      <View style={[styles.currentOrderContainer]}>
        <Text style={[styles.sectionHeader]}>Active order</Text>
        <Receipt id={1998} date={'8.nov.23 19:33'} totalCost={310} />
      </View>

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
    fontFamily: "Suwannaphum-Bold",
    fontSize: 22,
  },
});

export default ReceiptPage;
