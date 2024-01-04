import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/globals/Button';

const BookingsScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Button onPress={() => { navigation.navigate("Account") }}>ACCOUNT</Button>
        </View>
    )
}

export default BookingsScreen