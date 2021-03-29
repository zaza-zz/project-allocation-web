<template>
    <div class="login-page">
        <div class="form-container">
            <img src="../assets/usyd-logo.png" alt="" class="usyd-logo">
            <div class="input-container">
                <div class="input-field">Email</div>
                <el-input
                    placeholder="email"
                    v-model="email"
                    class="login-input email-input"
                    clearable>
                </el-input>
            </div>
            <div class="input-container">
                <div class="input-field">Password</div>
                <el-input
                    placeholder="password"
                    v-model="password"
                    class="login-input password-input"
                    show-password>>
                </el-input>
            </div>
            <el-button type="primary" class="login-button" @click="login">Login</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$router.push('/admin')
        }
    }
}
</script>


<style lang="scss" scoped>
.login-page {
    min-height: 100%;
    width: 100%;
    background-color: #003344;
    .usyd-logo {
        width: 80%;
        margin-bottom: 20px;
    }
    .form-container {
        width: 520px;
        margin: 0 auto;
        padding: 200px 35px 0;
    }
    .input-container {
        width: 80%;
        margin:0 auto 20px;
        .input-field {
            color: white;
            text-align: left;
            margin-bottom: 10px;
            font-size: 12px;
        }
    }
    .login-input {

    }
    .login-button {
        width: 80%;
        margin-top: 15px;
    }
    .email-input {
    }
}
</style>