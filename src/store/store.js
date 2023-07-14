import { createStore, applyMiddleware, compose } from 'redux'
import logger from "redux-logger"
import { rootReducer } from './root-reducer'

//root (boilerplate code)
const middleWares= [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

 export const store = createStore(rootReducer, undefined, composedEnhancers)