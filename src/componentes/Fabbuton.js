import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';

export default class Fabbuton extends Component {
    animation = new Animated.Value(0);

    pressMenu = () => {
        const toValue = this.open ? 0 : 1
        Animated.spring(this.animation, {
            toValue,
            friction: 6, 
            useNativeDriver: true,           
        }).start();

        this.open = !this.open;
        
    }

    render(){

        const homeStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const plusStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0, -130]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

        return (
            <View style={[styles.container, this.props.style]}> 
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.botao, styles.botaoseg, plusStyle]}>
                        <AntDesign name="plus" size={26} color="#FFF"/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.botao, styles.botaoseg, homeStyle]}>
                        <Entypo name="home" size={26} color="#FFF"/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.pressMenu} >
                    <Animated.View style={[styles.botao, styles.menu, rotation]} >
                        <Entypo name="menu" size={30} color="#FFF"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    botao:{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#32CD32',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        }
    },
    menu: {
        backgroundColor: '#32CD32'
    },
    botaoseg:{
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#32CD32'
    }
}); 