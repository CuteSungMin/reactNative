import React from "react"
import * as Location from "expo-location"
import {Alert} from 'react-native'
import axios from "axios"

import Loading from "./component/loading"
import Weather from "./component/weather"


const API_KEY = 'a3baea67f9c94ee41b2e139fdb86b653&units=metric'

export default class extends React.Component{
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const {
      data:{
        main: {temp},
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    this.setState({isLoading: false, condition: weather[0].main, temp,})
  };

  getLocation = async () => {
    try{
      const response = await Location.requestForegroundPermissionsAsync()
      const {
        coords: { latitude, longitude},
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert('위치를 찾을 수 없습니다.')
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? (
    <Loading></Loading>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition}></Weather>
    ) 
  }
}
