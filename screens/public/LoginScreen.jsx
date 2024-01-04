import { useNavigation } from '@react-navigation/native'
import { Field, Formik } from 'formik'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'
import FormikInput from '../../components/formik/FormikInput'
import Button from '../../components/globals/Button'
import { COLORS } from '../../styles/colors'
import { globalStyles } from '../../styles/global'
import { SPACES } from '../../styles/layout'

const LoginScreen = () => {
    const navigation = useNavigation();

    const initialFormValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Inserisci un formato email corretto.').required('Il campo è obbligatorio.'),
        password: Yup.string().required('Il campo è obbligatorio.')
    })

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/app/logo.png')} />
            </View>
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        console.log(values)
                    }, 2000)
                }}
            >
                {({ isValid, isSubmitting, handleSubmit }) => (
                    <View style={styles.form}>
                        <View style={globalStyles.formField}>
                            <Field placeholder="Inserisci email..." name="email" component={FormikInput} icon="person" iconColor={COLORS.primary500} autoCapitalize="none" autoCorrect={false} />
                        </View>
                        <View style={globalStyles.formField}>
                            <Field placeholder="Inserisci password..." name="password" component={FormikInput} icon="lock-closed" iconColor={COLORS.primary500} isPassword />
                        </View>
                        <Button disabled={!isValid || isSubmitting} onPress={handleSubmit}>{isSubmitting ? 'Accesso in corso...' : 'Accedi'}</Button>
                    </View>
                )}
            </Formik>
            <Text style={styles.goToRegister} onPress={navigation.replace.bind(this, "Register")}>Non hai un account? Registrati</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        ...globalStyles.noHeaderPagesContainer,
        rowGap: SPACES.l,
    },
    form: {
    },
    goToRegister: {
        ...globalStyles.anchorText,
        textAlign: 'center'
    }
})