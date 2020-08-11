import React from "react";
import {Text, View } from 'react-native';
import styles from './styles';


const Card = (props) => {
    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, {color: '#fff', backgroundColor: '#232634', paddingLeft:30, paddingRight: 30, borderRadius: 8}]}>{props.variable}</Text>
        </View>
    )
}

export default Card;