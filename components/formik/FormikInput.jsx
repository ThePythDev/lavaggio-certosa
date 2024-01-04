import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { FONT, SPACES } from '../../styles/layout';

const FormikInput = ({ placeholder, autoCapitalize, autoCorrect, icon, iconColor, isPassword, field, form, ...props }) => {
    const [isSecureTextMode, setIsSecureTextMode] = useState(true);

    const toggleVisibilityHandler = () => {
        setIsSecureTextMode(!isSecureTextMode);
    };

    const hasError = form.touched[field.name] && form.errors[field.name];

    return (
        <View style={{ rowGap: SPACES.s }}>
            <View style={styles.container}>
                {icon && <Ionicons name={icon} size={FONT.m} color={iconColor} />}
                <TextInput
                    style={[styles.textInput, hasError && styles.errorInput]}
                    secureTextEntry={isPassword && isSecureTextMode}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    onChangeText={field.onChange(field.name)}
                    onBlur={field.onBlur(field.name)}
                    value={field.value}
                    placeholder={placeholder}
                    {...props}
                />
                {isPassword && (
                    <Pressable style={styles.toggleVisibilityIcon} onPress={toggleVisibilityHandler}>
                        <Ionicons name={isSecureTextMode ? 'eye' : 'eye-off'} size={FONT.l} />
                    </Pressable>
                )}
            </View>
            {hasError && <Text style={styles.errorText}>{form.errors[field.name]}</Text>}
        </View>
    );
};

export default FormikInput;

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
    },
    errorInput: {
        borderBottomColor: 'red',
    },
    errorText: {
        color: 'red',
    },
})