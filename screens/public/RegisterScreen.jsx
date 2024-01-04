import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/globals/Button'
import Input from '../../components/globals/Input'
import { COLORS } from '../../styles/colors'
import { globalStyles } from '../../styles/global'
import { SPACES } from '../../styles/layout'

const RegisterScreen = () => {
    const navigation = useNavigation();

    const onSendOtpHandler = () => {
        Alert.alert("OTP inviato all'indirizzo mail")
    }

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/app/logo.png')} />
            </View>
            <Input icon="person" iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'Nome', value: '', onChangeText: () => { } }} />
            <Input icon="person" iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'Cognome', value: '', onChangeText: () => { } }} />
            <View style={{ rowGap: SPACES.s }}>
                <Input icon="person" iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'Email', value: '', onChangeText: () => { } }} />
                <Text style={styles.anchorText} onPress={onSendOtpHandler}>Ricevi OTP...</Text>
            </View>
            <Input icon="lock-closed" isPassword={true} toggleVisibility={true} iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'Password', value: '', onChangeText: () => { } }} />
            <Input icon="lock-closed" isPassword={true} toggleVisibility={true} iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'Conferma password', value: '', onChangeText: () => { } }} />
            <Input icon="person" iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'Cellulare', value: '', onChangeText: () => { } }} />
            <Input icon="person" iconColor={COLORS.primary500} textInputConfig={{ autoCapitalize: "none", autoCorrect: false, placeholder: 'OTP', value: '', onChangeText: () => { } }} />
            <Button onPress={() => { }}>Registrati</Button>
            <Text style={styles.goToLogin} onPress={navigation.replace.bind(this, "Login")}>Hai già un account? Accedi</Text>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        ...globalStyles.noHeaderPagesContainer,
        rowGap: SPACES.l
    },
    anchorText: globalStyles.anchorText,
    goToLogin: {
        ...globalStyles.anchorText,
        textAlign: 'center'
    }
})