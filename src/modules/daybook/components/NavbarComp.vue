<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" alt="Vue Logo"
                height="24"
                class="d-inline-black align-text-top mx-2">
            {{userName}}
        </a>

        <div class="d-flex">
            <button class="btn btn-info mx-2"
                @click="onLogout">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {
    setup() {
        
        const router = useRouter() 
        const {userName, logout} = useAuth()

        return {
            userName,
            onLogout: () => {
                router.push({name: 'login'})
                logout()
            }
        }
    }
}
</script>