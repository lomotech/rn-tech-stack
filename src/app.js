// import
import React from 'react'
import {Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'

// component
const App = () => {

    return (
        <Provider store={createStore(reducers)}>
            <Text>App</Text>
        </Provider>
    )
}

export default App
