/**
 * Common component for TextBox
 * @param {onChange} param0 method which is use to handle on change event of textbox.
 * @param {label} param1 which is use to set label of text input.
 * @param {isPassword} param2 which is use to detect password field.
 * @param {value} param3 which is current text of input box.
 * @param {customStyle} param4 which is used to provide custom style of textbox
 */

import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const TextBox = ({
    onChange,
    label,
    value,
    customStyle,
    multiline
}) => {
    return (
        <TextInput
            value={value}
            multiline={multiline}
            onChange={onChange}
            placeholder={label}
            returnKeyType="done"
            style={[styles.textBox, customStyle]}
            placeholderTextColor='rgba(34, 34, 34, 0.3)'
        />
    )
}

TextBox.defaultProps = {
    multiline: false,
    customStyle: {}
}

TextBox.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    multiline: PropTypes.bool
}

export default TextBox;