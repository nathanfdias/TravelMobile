import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

 return (
   <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <TextInput style={styles.input} placeholder='Search' placeholderTextColor="#FFF"/>
                <Feather name='search' size={24} color='white'/>
            </View>
            <View>
                <Text>X</Text>
            </View>
        </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#FFF',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
    input:{
        fontSize: 13,
        width: '40%',
        height: 38,
        borderRadius: 8,
        color: '#FFF',
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '60%',
        paddingHorizontal: 20,
        height: 48,
        borderRadius: 10,
        backgroundColor: '#A34f',
        color: '#FFF'
    },
    
})