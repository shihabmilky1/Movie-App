import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Bollywood from '../Bollywood/Bollywood'
import Hollywood from '../Hollywood/Hollywood'


export default function Home({ navigation }) {
    return (
        <ScrollView>
            <Bollywood navigation={navigation}></Bollywood>
            <Hollywood navigation={navigation}></Hollywood>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
