import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import DiscoverPage from '../../components/DiscoverPage';

export default function Home() {
    const navigation = useNavigation();

 return (
   <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <TextInput style={styles.input} placeholder='Search' placeholderTextColor="#FFF"/>
                    <Feather name='search' size={18} color='white' />   
            </View>
            <View style={{width:54, height: 54, backgroundColor: '#0003', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <Feather name='user' size={28} color='#FFF'/>
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Discover</Text>
            <View style={{width:'66%', height:70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#FFF'}}>
                    <Text style={[styles.textPage]}>
                        Popular
                    </Text>
                </View>
                <Text style={styles.textPage}>
                    Rating
                </Text>
                <Text style={styles.textPage}>
                    Recent
                </Text>
            </View>
        </View>
        <View style={styles.mainDiscover}>
            <DiscoverPage />
        </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#003580',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    input:{
        fontSize: 13,
        width: '40%',
        height: 38,
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
        borderRadius: 16,
        backgroundColor: '#0003',
        color: '#FFF'
    },
    main:{
        height: 130,
        backgroundColor: '#003580',
        paddingHorizontal: 30,
        width: '100%',
    },
    textPage:{
        fontSize: 18,
        paddingBottom: 16,
        color: '#FFF',
    },
    mainDiscover:{
        height: 340,
        backgroundColor: '#003580',
        borderTopWidth: 1, borderTopColor: '#0003'
    }
})