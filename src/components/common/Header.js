import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#20C896',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: '#1BA67C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    color: '#ffffff'
  }
};

export { Header };
