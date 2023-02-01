import { useStore } from "vuex"
import { computed } from "vue"


const useAuth = () => {
    const store = useStore()

    const createUser = async( user ) => {
        
        const resp = await store.dispatch('auth/createUser', user )
        return resp
    }

    const logInUser = async( user ) => {
        
        const resp = await store.dispatch('auth/singInUser', user )
        return resp
    }

    const chechAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = async() => {
        store.commit('auth/logoutUser')
        store.commit('journal/clearEntries')
        //limpiar las entradas clearEntrys
    }


    return {
        chechAuthStatus,
        createUser,
        logInUser,
        logout,

        authStatus: computed(() => store.getters['auth/currentState']),
        userName: computed(() => store.getters['auth/username']), 
        
    }
}

export default useAuth