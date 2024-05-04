import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import styles from '../styles/HomeScreenStyles';
// import renderRightActions from '../components/RenderRightActions';
import renderLeftActions from '../components/RenderLeftActions';

const SwipableTasks = ({ task, handleDeleteTask, handleToggleCompletion }: { task: any, handleDeleteTask: any, handleToggleCompletion: any }) => {
    const [renderRight, setRenderRight] = useState(false);

    const handleSwipeableWillOpen = (direction: string) => {
        setRenderRight(direction === 'right');
    };

    const handleSwipeableClose = () => {
        setRenderRight(false);
    };

    const renderRightActions = (
        progressAnimatedValue: Animated.AnimatedInterpolation<number>,
        dragAnimatedValue: Animated.AnimatedInterpolation<number>,
    ) => {
        const opacity = dragAnimatedValue.interpolate({
            inputRange: [-150, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity style={styles.deleteContainer} onPress={handleDeleteTask}>
                <Image source={require('../assets/bin.png')} />
            </TouchableOpacity>
        );
    };

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
            <TouchableOpacity style={styles.checkContainer} onPress={handleToggleCompletion}>
                <Image source={require('../assets/check.png')} />
            </TouchableOpacity>
        );
    };


    return (
        <Swipeable
            renderRightActions={renderRightActions}
            renderLeftActions={renderLeftActions}
            onSwipeableWillOpen={handleSwipeableWillOpen}
            onSwipeableClose={handleSwipeableClose}
        >
            <View style={styles.taskContainer}>
                <Text style={[styles.taskText, { paddingLeft: renderRight ? 60 : 15 }]}>{task.task}</Text>
                {
                    task.completed && (
                        <Image source={require('../assets/checked.png')} />
                    )
                }
            </View>
        </Swipeable>
    );
}

export default SwipableTasks



