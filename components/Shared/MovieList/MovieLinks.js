import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';
export default function MovieLinks() {
    return (
        <WebView
            source={{ uri: "https://exe.io/RakRm5" }}
        />
    )
}

const styles = StyleSheet.create({})
