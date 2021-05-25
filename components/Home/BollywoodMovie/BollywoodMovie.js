import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import MovieList from '../../Shared/MovieList/MovieList'
export default function BollywoodMovie({ navigation }) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch('https://calm-sands-58345.herokuapp.com/movie/bollywood')
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])
    return (

            <FlatList
                data={movie}
                renderItem={(movies) => <TouchableOpacity onPress={() => navigation.navigate('SinglePage')}><MovieList movies={movies}></MovieList></TouchableOpacity>}
                keyExtractor={(movies) => movies._id}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20 }}
            />
    )
}

const styles = StyleSheet.create({})
