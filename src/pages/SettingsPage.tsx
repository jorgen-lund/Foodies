import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PageHeader from '../components/PageHeader';
import i18next, {languageResources} from '../../services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../../services/languagesList.json';

const SettingsPage = () => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <PageHeader headerText={'Settings'} />
      <View>
        <Text
          style={{
            fontFamily: 'Suwannaphum-bold',
            fontSize: 20,
          }}>
          {t('Language')}:{' '}
        </Text>
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => changeLng(item)}>
                  <Text>{languagesList[item].nativeName}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text>{t('Change Language')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100,
  },
});

export default SettingsPage;
