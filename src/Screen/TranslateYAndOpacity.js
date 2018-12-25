import React, {PureComponent} from "module";
import { Animated } from 'react-native';


class TranslateYAndOpacity extends PureComponent {
    constructor(props) {
      // ...
      this.state = {
        opacityValue: new Animated.Value(opacityMin),
        translateYValue: new Animated.Value(translateYMin),
      };
      // ...
    }
    componentDidMount() {
      // ...
      this.show(this.props);
      // ...
    }
    componentWillReceiveProps(nextProps) {
      if (!this.props.isHidden && nextProps.isHidden) {
        this.hide(nextProps);
      }
      if (this.props.isHidden && !nextProps.isHidden) {
        this.show(nextProps);
      }
    }
    show(props) {
      // ...
      Animated.parallel([
        Animated.timing(opacityValue, { /* ... */ }),
        Animated.timing(translateYValue, { /*  ... */ }),
      ]).start();
    }
    hide(props) {
      // ...
      Animated.parallel([
        Animated.timing(opacityValue, { /* ... */ }),
        Animated.timing(translateYValue, { /*  ... */ }),
      ]).start();
    }
    render() {
      const { opacityValue, translateYValue } = this.state;
  
      const animatedStyle = {
        opacity: opacityValue,
        transform: [{ translateY: translateYValue }],
      };
  
      return (
        <Animated.View style={animatedStyle}>{this.props.children}</Animated.View>
      );
    }
  }