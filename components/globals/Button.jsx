import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { FONT, SPACES } from '../../styles/layout';

const Button = ({ children, outline, onPress, style, textStyle, disabled }) => {
    const onPressHandler = () => {
        return !disabled && onPress();
    }

    return (
        <Pressable onPress={onPressHandler} style={({ pressed }) => [styles.button, outline && styles.buttonOutline, pressed && styles.lessOpacity, disabled && styles.lessOpacity, style]}>
            <View>
                <Text style={[styles.buttonText, outline && styles.buttonTextOutline, textStyle]}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        backgroundColor: COLORS.primary500,
        textAlign: 'center',
        paddingVertical: SPACES.s,
    },
    buttonOutline: {
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.black,
    },
    buttonText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: FONT.m,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    buttonTextOutline: {
        color: COLORS.black,
    },
    lessOpacity: {
        opacity: 0.75
    }
})