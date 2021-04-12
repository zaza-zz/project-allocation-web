<template>
    <div class="admin-list-container">
        <div v-for="(user, index) in users" class="user-wrapper" :key="index">
            <div class="user-name">{{user.name}}</div>
            <div class="user-email">{{user.email}}</div>
        </div>
    </div>
</template>

<script>
import user from '@/api/user'
export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        this.getAllUser()
    },
    methods: {
        getAllUser() {
            user.getAllUser().then( response => {
                console.log(response)
                this.users = response.data.users
            })
        }
    }
}
</script>

<style lang="scss">
    
</style>