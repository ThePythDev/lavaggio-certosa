import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/globals/Button'
import { Dropdown } from '../../components/globals/Dropdown'
import { globalStyles } from '../../styles/global'
import { SPACES } from '../../styles/layout'

const HomeScreen = () => {
    const navigation = useNavigation();

    const languages = [
        {
            label: 'English',
            value: 'en'
        },
        {
            label: 'Italiano',
            value: 'it'
        },
    ]

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/app/logo.png')} />
            </View>
            <Text>Seleziona la lingua: </Text>
            <Dropdown placeholder='Lingua...' items={languages} />
            <Button onPress={navigation.replace.bind(this, "Login")}>Continua</Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        ...globalStyles.noHeaderPagesContainer,
        rowGap: SPACES.l
    }
    ,
})