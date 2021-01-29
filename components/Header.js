import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 10,
    padding: 5,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
