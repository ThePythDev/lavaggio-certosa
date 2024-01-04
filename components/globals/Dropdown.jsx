import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { COLORS } from '../../styles/colors';
import { FONT, SPACES } from '../../styles/layout';

export const Dropdown = ({ placeholder, items }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <RNPickerSelect
                    placeholder={{ label: placeholder, value: null }}
                    onValueChange={(value) => console.log(value)}
                    items={items}
                />
            </View>
            <View>
                <Ionicons name="chevron-down" size={FONT.m} color={COLORS.black} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
        flexDirection: 'row',
        paddingHorizontal: SPACES.xs,
        paddingVertical: SPACES.s,
        alignItems: 'center'
    }
})