import {createStore, applyMiddleware} from 'redux'
import promise  from 'redux-promise-middleware'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'

const loggerMiddleware = createLogger()


export default createStore(reducer, applyMiddleware(promise,thunk,loggerMiddleware))