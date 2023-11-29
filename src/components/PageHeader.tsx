import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

/* A reusable header used for shoppingCartPage and receiptPage */
const PageHeader = ({headerText}: {headerText: string}) => {
  const {t} = useTranslation();

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>{t(headerText)}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ED6232',
    height: 70,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 22,
    color: 'white',
  },
});
