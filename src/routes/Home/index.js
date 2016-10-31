import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  getComponent(nextState, cb) {
    
    const Home = require('./containers/HomeContainer').default
    const reducer = require('./modules/home').default

    //  Add the reducer to the store on key 'counter' 
    injectReducer(store, { key: 'home', reducer })

    cb(null, Home);
  }
})

/*
export default (store) => ({
  getComponent(nextState, cb) {
      const HomeView = require('./components/HomeView').default
      const reducer = require('./modules/home').default

      //  Add the reducer to the store on key 'counter' 
      injectReducer(store, { key: 'home', reducer })

      //  Return getComponent   
      cb(null, Counter)
  }
})*/

