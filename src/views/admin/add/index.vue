<template>
    <div class="add-admin-container">
        <div class="row">
            <div class="title">Name: </div>
            <div class="row-input">
                <el-input v-model="admin.name" placeholder="Name" @input="clearError('name')"></el-input>
                <div class="error-notification" v-show="errors.name.show">
                    <i class="el-icon-warning-outline"></i>
                    {{errors.name.text}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="title">Email: </div>
            <div class="row-input">
                <el-input v-model="admin.email" placeholder="Email" v-if="admin.id" :disabled="true"></el-input>
                <el-input v-model="admin.email" placeholder="Email" v-else @input="clearError('email')"></el-input>
                <div class="error-notification" v-show="errors.email.show">
                    <i class="el-icon-warning-outline"></i>
                    {{errors.email.text}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="title">Password: </div>
            <div class="row-input">
                <el-input v-model="admin.password" show-password placeholder="Password" @input="clearError('password')"></el-input>
                <div class="error-notification" v-show="errors.password.show">
                    <i class="el-icon-warning-outline"></i>
                    {{errors.password.text}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="title">Confirmed Password: </div>
            <div class="row-input">
                <el-input v-model="admin.confirmedPassword" show-password placeholder="Confirmed Password" @input="clearError('confirmedPassword')"></el-input>
                <div class="error-notification" v-show="errors.confirmedPassword.show">
                    <i class="el-icon-warning-outline"></i>
                    {{errors.confirmedPassword.text}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="title">Type: </div>
            <div class="row-input">
                <el-select v-model="admin.type" placeholder="Please Select" @change="clearError('type')">
                    <el-option 
                        v-for="item in adminTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
                <div class="error-notification" v-show="errors.type.show">
                    <i class="el-icon-warning-outline"></i>
                    {{errors.type.text}}
                </div>
            </div>
        </div>
        <div class="button-wrapper">
            <el-button type="danger" class="cancel-button" @click="cancel">Cancel</el-button>
            <el-button type="primary" class="confirm-button" @click="addAdmin">Confirm</el-button>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            admin: {
                id: '',
                name: '',
                email: '',
                password: '',
                confirmedPassword: '',
                type: ''
            },
            adminTypes: [
                {
                    value: '0',
                    label: 'Super Admin'
                },
                {
                    value: '1',
                    label: 'Admin'
                }
            ],
            errors: {
                name: {
                    show: false,
                    text: 'Please input name.'
                },
                email: {
                    show: false,
                    text: 'Please input email.'
                },
                password: {
                    show: false,
                    text: 'Please input password.'
                },
                confirmedPassword: {
                    show: false,
                    text: 'Please input confirmed password.'
                },
                type: {
                    show: false,
                    text: 'Please select admin type.'
                }
            },
        }
    },
    created() {
        let id = this.$route.params.id
        if (id) {
            console.log(id)
            this.getAdmin(id)
        }
    },
    methods: {
        getAdmin(id) {
            console.log(id)
            this.admin = {
                id: id,
                name: 'Wilson',
                email: 'lwen0514@uni.sydney.edu.au',
                password: '123456',
                confirmedPassword: '123456',
                type: '0',
            }
        },
        clearError(errorName) {
            this.errors[errorName].show = false

            if (errorName == 'password' || errorName == 'confirmedPassword') {
                this.errors.password.show = false
                this.errors.confirmedPassword.show = false
            }
        },
        cancel() {
            this.$router.go(-1)
        },
        validateBeforeAdd() {
            let isPassed = true

            if (!this.admin.name) {
                this.errors.name.text = 'Please input name.'
                this.errors.name.show = true
                isPassed = false
                return isPassed
            } 

            if (!this.admin.email) {
                this.errors.email.text = 'Please input email.'
                this.errors.email.show = true
                isPassed = false
                return isPassed
            } 

            if (!this.admin.password) {
                this.errors.password.text = 'Please input password.'
                this.errors.password.show = true
                isPassed = false
                return isPassed
            } 

            if (!this.admin.confirmedPassword) {
                this.errors.confirmedPassword.text = 'Please input confirmed Password.'
                this.errors.confirmedPassword.show = true
                isPassed = false
                return isPassed
            } 

            if (!this.admin.type) {
                this.errors.type.text = 'Please select admin type.'
                this.errors.type.show = true
                isPassed = false
                return isPassed
            } 

            if (this.admin.password !== this.admin.confirmedPassword) {
                this.errors.password.text = 'Unmatched password'
                this.errors.password.show = true

                this.errors.confirmedPassword.text = 'Unmatched password'
                this.errors.confirmedPassword.show = true
                isPassed = false
                return isPassed
            }

            return isPassed
        },
        addAdmin() {
            if (!this.validateBeforeAdd()) {
                return
            }
            this.showConfirmDialog()
        },
        submitAdminInfo() {
            let admin = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmedPassword: this.confirmedPassword
            }
            console.log(admin)
        },
        showConfirmDialog() {
            this.$confirm('Are you sure add this admin?', 'Confirm', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel'
            }).then(() => {
                this.submitAdminInfo()
                this.$message({
                    type: 'success',
                    message: 'Added Successfully'
                })
            })
        }
    },
    watch: {
        '$route' () {
            this.admin = {
                id: '',
                name: '',
                email: '',
                password: '',
                confirmedPassword: '',
                type: '',
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.add-admin-container {
    padding-top: 80px;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .row {
        margin-bottom: 25px;
        .title {
            font-size: 14px;
            margin-bottom: 15px;
        }
        .row-input {
            display: inline-block;
            width: 300px;
            position: relative;
        }
        .error-notification {
            display: inline-block;
            color: red;
            margin-left: 20px;
            font-size: 12px;
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateX(100%) translateY(-50%);
            .el-icon-warning-outline {
                margin-right: 5px;
            }
        }
        .el-select {
            width: 300px;
        }
    }
    .button-wrapper {
        text-align: right;
    }
}

</style>