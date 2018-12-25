import React , { Component } from 'react'
import { 
  View, 
  Text, 
  Animated,
  StyleSheet,
  Image,
  Button,
  Easing
 } from 'react-native';


class FancyBoard extends Component{
  constructor(props){
    super(props);
    this.animatedValue = new Animated.Value(0)
  }
  
  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())

    // automatically stop with using decay

    // Animated.sequence([
    //   // decay, then spring to start and twirl
    //   Animated.decay(this.animatedValue, {
    //     // coast to a stop
    //     velocity: {x: 50, y: 100}, // velocity from gesture release
    //     deceleration: 0.997,
    //   }),
    //   Animated.parallel([
    //     // after decay, in parallel:
    //     Animated.spring(this.animatedValue, {
    //       toValue: {x: 0, y: 0}, // return to start
    //     }),
    //     Animated.timing(this.animatedValue, {
    //       // and twirl
    //       toValue: 360,
    //     }),
    //   ]),
    // ]).start(); 
  }
  

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '180deg']
    })
      return (
        <View style={styles.container}>
        <Button 
          style={{width: 100}}
          onPress={this.animate}
          title="start animate"
          color="#841584"
        />
        
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red'}} />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue'}} />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange'}} />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green'}} >
            Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{rotateX}],
            marginTop: 50,
            height: 30,
            width: 100,
            backgroundColor: 'black'}}>
          <Text style={{color: 'white'}}>Hello from TransformX</Text>
        </Animated.View>
      </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    
  }
})

export default FancyBoard;