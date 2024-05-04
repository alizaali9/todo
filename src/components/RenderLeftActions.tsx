import React from "react";
import { Text, TouchableOpacity, View, Animated, Image } from "react-native";
import styles from "../styles/HomeScreenStyles";
import { colors } from "../constants/colors";

const renderLeftActions = (
    progressAnimatedValue: Animated.AnimatedInterpolation<number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<number>,
) => {
    const opacity = dragAnimatedValue.interpolate({
        inputRange: [-150, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    return (
        <TouchableOpacity style={styles.checkContainer}>
            <Image source={require('../assets/check.png')} />
        </TouchableOpacity>
    );
};

export default renderLeftActions;