<template>
    <div class="home">
        <div class="nav">
            <img
                class="logo"
                src="./../assets/logo.png"
                alt="logo"
            >
			<div class="navText">筑巢</div>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >

                <el-menu-item index="/home/problem">缺陷</el-menu-item>
                
            </el-menu>
        </div>
        <router-view />
    </div>
</template>
<style lang="less" scoped>
.home {
	width: 100%;
	// height: 100%;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
}
.nav {
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	background: #ffffff;
    .logo {
        width: 30px;
		height: 30px;
        margin-right: 10px;
        margin-left: 10px;
	}
	.navText{
		margin-right: 100px;
		font-size: 18px;
	}
}
</style>
<script>
export default {
    name: "Home",
    data() {
        return {
            activeIndex: "/home/problem"
        };
    },

    components: {},
    methods: {
        handleSelect(key, keyPath) {
			console.log(key, keyPath);
			this.$router.push({ path: key });
        }
    }
};
</script>
