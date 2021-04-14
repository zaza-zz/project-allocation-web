<template>
    <div class="admin-list-container">
        <div class="admin-wrapper">
            <div class="header">Super Admin</div>
            <div class="admin-list">
                <div v-for="(admin, index) in superAdmins" @click="editAdmin(admin.id)" class="single-admin-wrapper" :key="index">
                    <div class="admin-avatar" v-if="admin.avatar" :style="{backgroundImage: 'url(' + admin.avatar + ')'}"></div>
                    <div class="admin-avatar default-avatar" v-else></div>
                    <div class="admin-name">{{admin.name}}</div>
                </div>
            </div>
        </div>
        <div class="admin-wrapper">
            <div class="header">Admin</div>
            <div class="admin-list">
                <div v-for="(admin, index) in ordinaryAdmins" @click="editAdmin(admin.id)" class="single-admin-wrapper" :key="index">
                    <div class="admin-avatar" v-if="admin.avatar" :style="{backgroundImage: 'url(' + admin.avatar + ')'}"></div>
                    <div class="admin-avatar default-avatar" v-else></div>
                    <div class="admin-name">{{admin.name}}</div>
                </div>
            </div>
        </div>
        <el-button class="add-admin-button" type="primary" @click="toAddAdmin">Add Admin</el-button>
    </div>
</template>

<script>
import user from '@/api/user'
export default {
    data() {
        return {
            admins: [],
        }
    },
    computed: {
        superAdmins () {
            return this.admins.filter( admin => {
                return admin.type == 0
            })
        },
        ordinaryAdmins() {
            return this.admins.filter( admin => {
                return admin.type == 1
            })
        }

    },
    created() {
        //this.getAllUser()
        this.getAllAdmins()
    },
    methods: {
        getAllUser() {
            user.getAllUser().then( response => {
                console.log(response)
                this.users = response.data.users
            })
        },
        getAllAdmins() {
            this.admins = [
                {
                    id: '1',
                    name: 'Jia Wei',
                    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20190324/26b14ff8956b4661a456a7e6751ce085.jpeg',
                    type: '0'
                },
                                {
                    id: '2',
                    name: 'Zaza',
                    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20190324/1269f680eea2405da67cece6b1bf6716.jpeg',
                    type: '0'
                },
                {
                    id: '3',
                    name: 'Bing bro',
                    avatar: 'https://i.pinimg.com/originals/76/93/55/769355049f5d712011bb337888115e1a.jpg',
                    type: '0'
                },
                {
                    id: '1',
                    name: 'Wilson',
                    avatar: 'http://m.imeitou.com/uploads/allimg/2019080515/he0mvtgkbu3.jpg',
                    type: '0'
                },
                {
                    id: '4',
                    name: 'Nick',
                    avatar: 'https://www.qianming88.com/wp-content/uploads/2020/08/20200814145919-5f363647db971.jpg',
                    type: '0'
                },
                {
                    id: '5',
                    name: 'John',
                    avatar: '',
                    type: '1'
                }
            ]
        },
        toAddAdmin () {
            this.$router.push('/admin/add')
        },
        editAdmin(id) {
            this.$router.push('/admin/add/' + id)
        }
    }
}
</script>

<style lang="scss">
.admin-list-container {
    padding: 30px;
    position: relative;
    .admin-wrapper {
        margin-bottom: 20px;
        .header {
            font-size: 20px;
            margin-bottom: 20px;
        }
        .admin-list {
            width: 60%;
        }
        .single-admin-wrapper {
            display: inline-block;
            margin-right: 40px;
            margin-bottom: 20px;
            cursor: pointer;
            text-align: center;
        }
        .admin-avatar {
            margin-bottom: 10px;
            width: 60px;
            height: 60px;
            background-size: cover;
            border-radius: 100%;
        }
        .admin-name {
            font-size: 12px;
        }
        .default-avatar {
            background-image: url('../../../assets/default-avatar.png');
        }
    }
    .add-admin-button {
        position: absolute;
        right: 30px;
        top: 30px;
    }

}

</style>