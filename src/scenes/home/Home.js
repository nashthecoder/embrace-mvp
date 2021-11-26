import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cream,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 60,
    color: '#562349',
    fontWeight: 'bold',
    fontSize: 80,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>embrace.</Text>
    <Button
      title="Start my journey..."
      color={colors.darkPurple}
      backgroundColor={colors.lightYellow}
      onPress={() => {
        navigation.navigate('Details', { from: 'Home' })
      }}
    />
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
