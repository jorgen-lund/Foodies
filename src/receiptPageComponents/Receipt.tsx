import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReceiptOrder from './ReceiptOrder';

interface ReceiptProps {
  id: number;
  date: string;
  totalCost: number;
}

const Receipt = (props: ReceiptProps) => {
  return (
    <View style={[styles.receiptContainer]}>
      <View style={[styles.receiptTopContainer]}>
        <Text style={[styles.receiptText, {fontSize: 18}]}>
          Order ID: #{props.id}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={[styles.receiptText, {fontSize: 14}]}>
              Food ready in:
            </Text>
            <View style={[styles.durationContainer]}>
              <View style={[styles.numberContainer]}>
                <Text style={[styles.receiptText, {fontSize: 19}]}>4</Text>
              </View>
              <Text style={[styles.receiptText, {fontSize: 16, paddingLeft: 3}]}>min</Text>
            </View>
          </View>
          <View>
            <MaterialIcons name={'pot-mix-outline'} color={'white'} size={42} />
          </View>
        </View>
      </View>
      <View style={[styles.receiptMidContainer]}>
        <View style={[styles.receiptMidInnerContainer]}>
          <Text style={[styles.receiptText, {fontSize: 16}]}>Date:</Text>
          <Text style={[styles.receiptText, {fontSize: 16}]}>{props.date}</Text>
        </View>
        <View style={[styles.receiptMidInnerContainer]}>
          <Text style={[styles.receiptText, {fontSize: 16}]}>Cost:</Text>
          <Text style={[styles.receiptText, {fontSize: 16}]}>
            NOK {props.totalCost},-
          </Text>
        </View>
      </View>
      <ReceiptOrder amount={1} dish={'Pasta Bolognese'} price={160}/>
      <ReceiptOrder amount={1} dish={'Diavola'} price={150}/>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptContainer: {
    backgroundColor: '#32BDED',
    borderRadius: 5,
  },
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
    color: 'white',
  },
  receiptTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 10,
  },
  numberContainer: {
    backgroundColor: '#006385',
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
  },
  receiptMidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderStyle: 'dashed',
    borderColor: 'white',
    marginBottom: 5,
  },
  receiptMidInnerContainer: {
    borderStyle: 'dashed',
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    width: '50.6%',
  },
});
export default Receipt;
