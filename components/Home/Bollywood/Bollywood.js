import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import MovieList from '../../Shared/MovieList/MovieList'
import { AntDesign } from '@expo/vector-icons';

export default function Bollywood({ navigation }) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch('https://calm-sands-58345.herokuapp.com/movie/bollywood')
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ marginTop: 15, marginLeft: 8 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Bollywood</Text>
                </View>
                <View style={{ marginTop: 15, marginLeft: 8 }}>
                    <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate('BollywoodMovie')} />
                </View>
            </View>
            <View style={{ height: 160, marginTop: 20 }}>
                <FlatList
                    data={movie}
                    renderItem={(movies) => <TouchableOpacity><MovieList movies={movies}></MovieList></TouchableOpacity>}
                    keyExtractor={(movies) => movies._id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})
