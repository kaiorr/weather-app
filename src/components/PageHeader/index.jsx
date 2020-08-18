import React from 'react';
import {View, Image, ImageBackground} from 'react-native';

import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';
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
            <Image source={backIcon} resizeMode="center" style={{tintColor:'#f8734b'}}/>
          </BorderlessButton>
        </View>
  
        <View style={styles.header}>
          <></>
        </View>
      </View>
    );
  };
  
  export default PageHeader;