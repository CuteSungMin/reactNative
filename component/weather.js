import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#373b44', '#4286f4'],
    },
    Drizzle: {
        gradient: ['#89f7fe', '#66a6ff'],
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00c6fb', '#005bea'],
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7de2fc', '#b9b6e5'],
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89f7fe', '#66a6ff'],
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#89f7fe', '#66a6ff'],
    },
}

export default function Weather({ temp, condition }) {
    const currentWeather = weatherOptions[condition] || weatherOptions['Clear'];
    return (
        <LinearGradient colors={currentWeather.gradient} style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} name={currentWeather.iconName} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    temp: {
        fontSize: 50,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});