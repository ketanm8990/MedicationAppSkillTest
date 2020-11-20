/**
* sticky header component
* @param {title} param0 method which is use to display sticky header title.
* @param {onPress} param1 which is onPress event.
*/

import React, { PureComponent } from 'react';
import { Image, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class StickyHeader extends PureComponent {

    render() {
        const { title, onPress } = this.props;
        const { stickySection, backgroundColorView, stickyBack, stickyTitle } = styles;
        return (
            <View key="sticky-header" style={stickySection}>
                <SafeAreaView style={backgroundColorView} />
                <TouchableOpacity onPress={() => onPress()}>
                    <Image style={stickyBack} source={require('../../image/back.png')} />
                </TouchableOpacity>
                <Text style={stickyTitle}>{title}</Text>
            </View>
        )
    }
}
export default StickyHeader;

StickyHeader.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
}