import React, { useEffect }  from "react";
import { Text, StyleSheet, Image, Button } from "react-native";
import { Container } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

const HomeScreen = ({ navigation }) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome')
    }, 5000)
  })
  return (
    <Container>
      <Grid>
        <Col style={styles.bodyStyle}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.imgStyle}
          ></Image>
          <Text
            style={styles.text}
          >Gofer
          </Text>
        </Col>
      </Grid>
  </Container>
  )
};

const styles = StyleSheet.create({
  bodyStyle: {
    backgroundColor: '#0086B9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    width: 100,
    height: 100
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    marginVertical: 10
  },
  logoButton: {
    padding: 20,
    backgroundColor: "transparent",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20
  },
  logoText: {
    color: "#ffffff"
  }
});

export default HomeScreen;
