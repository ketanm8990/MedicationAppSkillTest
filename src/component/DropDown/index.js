/**
 * Common component for drop down picker
 * @param {onValueChange} param0 method which is use to handle on change event of drop down picker.
 * @param {items} param1 which is items array data.
 * @param {value} param3 which is current text of drop down picker.
 */

import React, { PureComponent, Fragment } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import RNPickerSelect from 'react-native-picker-select';

class DropDown extends PureComponent {

    render() {
        const { onChangeHandler, items, icon, value } = this.props;
        const { inputAndroid, inputIOS, mgDropDown } = styles;
        return (
            <RNPickerSelect
                onValueChange={(value) => onChangeHandler(value)}
                useNativeAndroidPickerStyle={false}
                style={{
                    inputAndroid: inputAndroid,
                    inputIOS: inputIOS
                }}
                Icon={() => {
                    return (
                        <Image style={mgDropDown} source={icon} />
                    )
                }}
                value={value}
                items={items}
            />
        )
    }
}
export default DropDown;

DropDown.propTypes = {
    onValueChange: PropTypes.func,
    value: PropTypes.string,
    items: PropTypes.array
}