<template>
    <div class="nav-bar-container">
        <i class="el-icon-s-fold nav-icon" v-show="!sidebar.opened" @click="toggleCollapsed"></i>
        <i class="el-icon-s-unfold nav-icon" v-show="sidebar.opened" @click="toggleCollapsed"></i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    data () {
        return {
            isCollapsed: false
        }
    },
    methods: {
        toggleCollapsed () {
            this.$store.dispatch('app/toggleSideBar')
        }
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
    }
    
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.nav-bar-container {
    text-align: left;
    padding: 15px 20px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

    .nav-icon {
        cursor: pointer;
        font-size: 20px;
    }
}
</style>