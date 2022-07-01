import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StarIcon = () => {
    return (
        <View>
            <Image
                source={require('../assets/rating.png')}
            />
        </View>
    )
}

export default StarIcon

const styles = StyleSheet.create({})