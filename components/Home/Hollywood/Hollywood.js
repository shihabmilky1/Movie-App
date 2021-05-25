import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MovieList from '../../Shared/MovieList/MovieList'
import { AntDesign } from '@expo/vector-icons';
export default function Hollywood({ navigation }) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch('https://calm-sands-58345.herokuapp.com/movie/hollywood')
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ marginTop: 15, marginLeft: 8 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Hollywood</Text>
                </View>
                <View style={{ marginTop: 15, marginLeft: 8 }}>
                    <AntDesign name="right" size={20} color="black" />
                </View>
            </View>
            <FlatList
                data={movie}
                renderItem={(movies) => <TouchableOpacity onPress={() => navigation.navigate('SinglePage')}><MovieList movies={movies}></MovieList></TouchableOpacity>}
                keyExtractor={(movies) => movies._id}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                style={{ height: 160, marginTop: 20 }}
            />
        </>
    )
}

const styles = StyleSheet.create({})
