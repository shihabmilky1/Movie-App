import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function MovieList({ movies }) {
    return (

        <View style={{ marginLeft: 5 }}>

            <Image
                style={{ width: 130, height: 130, borderRadius: 5 }}
                source={{
                    uri: movies?.item?.img,
                }}
            />
            <Text>{movies?.item.title ? movies?.item?.title : ''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
