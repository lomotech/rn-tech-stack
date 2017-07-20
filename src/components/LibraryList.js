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

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

// connect have 2 part of function
// 1. prepare props data
// 2. connect that props data to class
export default connect(mapStateToProps)(LibraryList)