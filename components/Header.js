import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Constant from 'expo-constants'
export default function Header({ navigation }) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Movie</Text>
            </View>
            <View style={{ marginHorizontal: 15, }}>
                <AntDesign onPress={() => navigation.navigate('Home')} name="search1" size={20} color="black" />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: Constant.statusBarHeight,
        backgroundColor: 'white',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 4,
    },
    headerTitle: {
        marginHorizontal: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
})
