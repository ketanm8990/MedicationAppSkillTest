/**
 * Common component for TextBox
 * @param {onChange} param0 method which is use to handle on change event of textbox.
 * @param {label} param1 which is use to set label of text input.
 * @param {isPassword} param2 which is use to detect password field.
 * @param {value} param3 which is current text of input box.
 * @param {customStyle} param4 which is used to provide custom style of textbox
 */

import React, { PureComponent, Fragment } from 'react';
import { TextInput, Image, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class InputWithIcon extends PureComponent {

    render() {
        const { refField, iconUrl, autoCapitalize, autoFocus, keyboardType, multiline, placeholder, returnKeyType, onSubmitEditing, blurOnSubmit, placeholderTextColor,
            secureTextEntry, value, onChangeHandler, children, containerStyle, iconStyle, inputTextStyle, selectionColor, editable, numberOfLines, pointerEvents } = this.props;
        const { container, container2, iconView, icon, textInput } = styles;
        return (
            <Fragment>
                <View style={[Platform.OS == 'ios' ? container : container2, containerStyle]} pointerEvents={pointerEvents ? pointerEvents : 'auto'}>
                    {iconUrl &&
                        <View style={iconView}>
                            <Image
                                resizeMode="contain"
                                source={iconUrl}
                                style={[icon, iconStyle]} />
                        </View>
                    }

                    <TextInput
                        ref={refField}
                        editable={editable}
                        autoCapitalize={autoCapitalize}
                        autoFocus={autoFocus}
                        keyboardType={keyboardType}
                        multiline={multiline || false}
                        placeholder={placeholder}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                        blurOnSubmit={blurOnSubmit}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        numberOfLines={numberOfLines}
                        underlineColorAndroid='transparent'
                        pointerEvents={pointerEvents ? pointerEvents : 'auto'}
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : 'rgba(34, 34, 34, 0.3)'}
                        selectionColor={selectionColor ? selectionColor : 'rgba(34, 34, 34, 0.3)'}
                        onChangeText={value => onChangeHandler(value)}
                        style={[textInput, inputTextStyle]} />
                    {children}
                </View>
            </Fragment>
        );
    }
}

InputWithIcon.defaultProps = {
    multiline: false,
    customStyle: {}
}

InputWithIcon.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    customStyle: PropTypes.object,
    multiline: PropTypes.bool,
    editable: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    autoFocus: PropTypes.bool,
    numberOfLines: PropTypes.number,
    placeholderTextColor: PropTypes.string,
    selectionColor: PropTypes.string,
    pointerEvents: PropTypes.string,
    blurOnSubmit: PropTypes.bool,
    returnKeyType: PropTypes.string,
    ref: PropTypes.string,
    underlineColorAndroid: PropTypes.string
}

export default InputWithIcon;