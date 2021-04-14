<template>
    <div class="side-bar-wrapper" :class="{'collapsed-sidebar': isCollapse}">
        <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
            :collapse-transition="false"
            mode="vertical"
        >
            <div class="menu-wrapper" v-for="(firstRoute, firstIndex) in routes" :key="firstIndex">
                <el-submenu v-if="firstRoute.children && firstRoute.children.length > 1" :index="firstRoute.path">
                    <template slot="title">
                        <i :class="firstRoute.meta.icon"></i>
                        <span slot="title">{{firstRoute.meta.title}}</span>
                    </template>
                    <router-link :to="firstRoute.path + '/' + secondRoute.path" :key="firstIndex + '-' + secondIndex"  v-for="(secondRoute, secondIndex) in firstRoute.children">
                        <el-menu-item :index="firstRoute.path + '/' + secondRoute.path">{{secondRoute.meta.title}}</el-menu-item>
                    </router-link>
                </el-submenu>

                <router-link v-else :to="firstRoute.path + '/index'">
                    <el-menu-item :index="firstRoute.path + '/index'" >
                        <i :class="firstRoute.meta.icon"></i>
                        <span slot="title">{{firstRoute.meta.title}}</span>
                    </el-menu-item>
                </router-link>
            </div>
        </el-menu>
        
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import variables from '@/styles/variables.scss'
import { routes } from '@/router'

export default {
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        isCollapse() {
            return !this.sidebar.opened
        },
        variables() {
            return variables
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            debugger
            return path
        },
        routes() {
            return routes.filter((route) => {
                if (route.children) {
                    let children = []
                    children = route.children.filter ((child) => {
                        return !child.hidden
                    })
                    route.children = children
                }

                return !route.hidden
            }) 
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
@import "~@/styles/variables.scss";
.side-bar-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $sideBarWidth;
    height: 100%;
    background-color: $menuBg;
    z-index: 1001;
    overflow: hidden;
    transition: width 0.28s;
}

.side-bar-wrapper.collapsed-sidebar {
    width: $hideSideBarWidth;
}

.el-menu--collapse {
    .el-submenu__title {
        .el-submenu__icon-arrow {
            display: none;

        }
        span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
        }
    }
}


.el-submenu__title {
    text-align: left;
}
.el-submenu {
    .el-menu-item {
        text-align: left;
        background-color: #1f2d3d !important;
        &:hover {
            background-color: #001528 !important;
        }
    }
}
.el-menu-item {
    text-align: left;
}
.el-menu {
    border: none;
    a {
        text-decoration: none;
    }
}
</style>