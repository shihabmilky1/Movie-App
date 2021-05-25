import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
export default function MovieList({ navigation }) {
    return (

        <View style={{}}>

            <Image
                style={{ width: '40%', height: 200, flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginLeft: '30%', borderRadius: 5 }}
                source={{
                    uri: 'https://image.tmdb.org/t/p/w185/n6kZfTjuTK3P9ByRFTkBlUwdBRA.jpg',
                }}
            />
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: 5 }}>Radhe</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DownloadPage')}><Text style={{ width: '50%', backgroundColor: 'skyblue', fontSize: 20, marginLeft: '25%', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 10, marginTop: 40 }}>Download 720 <Feather name="download" size={24} color="black" /></Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})