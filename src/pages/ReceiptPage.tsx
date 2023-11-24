import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PageHeader from '../components/PageHeader';
import Receipt from '../components/receiptPageComponents/Receipt';
import SectionText from '../components/LandingPageComponents/SectionText';

const ReceiptPage = () => {
  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <PageHeader headerText={'Order History'} />
      <ScrollView>
        <View style={[styles.currentOrderContainer]}>
          <Text style={[styles.sectionHeader]}>Active order</Text>
          <Receipt
            id={1998}
            date={'8.nov.23 19:33'}
            totalCost={310}
            isActive={true}
            waitingTime={9}
          />
        </View>
        <View style={[styles.currentOrderContainer]}>
          <Text style={[styles.sectionHeader]}>Previous orders</Text>
          <Receipt
            id={2023}
            date={'4.nov.23 15:02'}
            totalCost={310}
            isActive={false}
            waitingTime={0}
          />
          <Receipt
            id={9189}
            date={'1.nov.23 12:30'}
            totalCost={150}
            isActive={false}
            waitingTime={0}
          />
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
