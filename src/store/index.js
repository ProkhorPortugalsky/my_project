import { createStore } from 'vuex'
import user from './user'
import ads from './ads'
import shared from './shared'


const store = createStore({
    modules:{
        ads, user, shared
    }
})

export default store