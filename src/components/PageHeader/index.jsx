import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

 
  const PageHeader = () =>  {
    const {goBack} = useNavigation();

    function handleGoBack() {
        goBack();
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <BorderlessButton onPress={handleGoBack}>
            <View style={styles.topBarIcon}>
              <FontAwesome name="angle-left" size={40} color="#f8734b" />
            </View>
          </BorderlessButton>
        </View>
  
        <View style={styles.header}>
          <></>
        </View>
      </View>
    );
  };
  
  export default PageHeader;