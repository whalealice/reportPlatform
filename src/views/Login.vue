<template>
    <div class="login">
        <div class="loginText">
            <h1>筑巢天下，数据为家</h1>
            <p>精细化运营，效率提升</p>
        </div>
        <div class="loginBox">
            <div>登录</div>

            <el-button
                type="primary"
                round
                v-on:click="toHome" 
            >QQ登录</el-button>

        </div>

    </div>
</template>
<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    position: relative;
    background: #14161b;
    color: #ffffff;
    .loginText {
        position: absolute;
        top: 16%;
        left: 20%;
        text-align: left;
        h1 {
            font-size: 32px;
            margin-bottom: 10px;
        }
    }
    .loginBox {
        position: absolute;
        top: 20%;
        right: 20%;
        width: 300px;
        height: 200px;
        padding: 20px 10px;
        background: #2f3136;
        div {
            margin-bottom: 20px;
            font-size: 18px;
        }
        .el-button.is-round {
            width: 100%;
        }
    }
}
</style>
<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: "Home",
    components: {},
    methods: {
        toHome(){
            this.$router.push({ path: "home" });
        }
    }
};
</script>