import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { FONT, SPACES } from '../../styles/layout';

const Input = ({ icon, iconColor, textInputConfig, isPassword, keyboardType }) => {
    const [isSecureTextMode, setIsSecureTextMode] = useState(true);

    const toggleVisibilityHandler = () => {
        setIsSecureTextMode(!isSecureTextMode)
    }

    return (
        <View style={styles.container}>
            {icon && <Ionicons name={icon} size={FONT.m} color={iconColor} />}
            <TextInput keyboardType={keyboardType || 'default'} style={styles.textInput} {...textInputConfig} secureTextEntry={isPassword && isSecureTextMode} />
            {isPassword &&
                <Pressable style={styles.toggleVisibilityIcon} onPress={toggleVisibilityHandler}>
                    <Ionicons name={isSecureTextMode ? 'eye' : 'eye-off'} size={FONT.l} />
                </Pressable>
            }
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACES.m,
        position: 'relative'
    },
    textInput: {
        flex: 1,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1,
        paddingHorizontal: SPACES.xs,
        paddingVertical: SPACES.s,
    },
    toggleVisibilityIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginEnd: SPACES.s,
        marginTop: SPACES.xs
    }
})