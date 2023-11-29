import React, {useEffect, useState} from 'react';
import {
  FlatList,
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
import * as RNLocalize from 'react-native-localize';

interface LanguageInfo {
  name: string;
  nativeName: string;
}

interface LanguagesList {
  [key: string]: LanguageInfo;
}

const SettingsPage = () => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("");
  const typedLanguagesList: LanguagesList = languagesList;

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
    setActiveLanguage(lng);
    setVisible(false);
  };

  useEffect(() => {
    const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
    if (languageResources.hasOwnProperty(deviceLanguage)) {
      setActiveLanguage(deviceLanguage);
    }
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <PageHeader headerText={'Settings'} />
      <View> 
        <View style={{flexDirection: 'row', padding: 7, borderBottomWidth: 1, justifyContent: 'center'}}>
        
        <Text style={{fontSize: 17, fontFamily: "Suwannaphum-bold"}}>{t("Change Language")}</Text>
        </View>
      <FlatList
              data={Object.keys(languageResources)}
              renderItem={({item}) => (
                <TouchableOpacity style={[styles.languageBtn, item === activeLanguage ? styles.activeLanguage : null]} onPress={() => changeLng(item)}>
                  <Text style={{fontFamily: "Suwannaphum-regular"}}>{typedLanguagesList[item]?.nativeName}</Text>
                </TouchableOpacity>
              )}
            />
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
  languageBtn:{
    padding:10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  activeLanguage: {
    backgroundColor: '#e0e0e0',
  }
});

export default SettingsPage;
