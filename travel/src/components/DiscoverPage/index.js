import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function DiscoverPage() {
 return (
   <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity style={styles.content}>
            <Image source={require('../../assets/landscape2.jpg')} style={styles.cover}/>
            <Text style={{fontSize: 20, color: '#FFF', alignSelf: 'flex-start', paddingLeft: 8, paddingTop: 10}}>Grécia</Text>
        </TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 20,
        paddingLeft: 30,
    },
    content:{
        height: 278,
        backgroundColor: '#0003',
        padding: 6,
        borderRadius: 20,
        alignItems: 'center',
        
    },
    cover:{
        width: 200,
        height: 140,
        borderRadius: 20,
    }
});