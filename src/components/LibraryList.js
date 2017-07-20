import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

class LibraryList extends Component() {
  state = {}

  render() {
    return (
      <View>LibraryList</View>
    )
  }
}

export default connect()(LibraryList)