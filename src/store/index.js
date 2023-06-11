import { createStore } from 'vuex'
import user from './user'
import ads from './ads'


const store = createStore({
    modules:{
        ads, user
    }
})

export default store