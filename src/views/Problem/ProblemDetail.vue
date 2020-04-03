<template>
    <div class="detailWrap contentWrap">
        <div class="headerBox">
            <el-tag
                type="danger"
                effect="dark"
                size="mini"
            >BUG</el-tag>
            <span class="headerText"><b>{{detailData.title}}</b></span>
        </div>
        <div class="mainBox">
            <div class="mainLeft">
                <p class="mainText">
                    <b>【问题描述】</b>
                </p>
                <p>
                    {{detailData.description}}
                </p>

                <p class="mainText">
                    【截图】
                </p>

                <p>
                    {{detailData.description}}
                </p>
                <p class="mainText">
                    【链接地址】
                </p>
                <p>
                    {{detailData.description}}
                </p>
            </div>
            <div class="mainRight">
                <div>基本信息</div>
                <ul class="basicBox">
                    <li>
                        <p>状态</p>
                        <p>
                            <el-tag
                                size="mini"
                                effect="plain"
                            >
                                {{ detailData.platform }}
                            </el-tag>
                        </p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p>{{detailData.openid}}</p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                effect="dark"
                                size="mini"
                                type="info"
                            >{{ detailData.severity}}</el-tag></p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                effect="dark"
                                size="mini"
                                type="info"
                        >{{ detailData.severity}}</el-tag></p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                effect="dark"
                                size="mini"
                                type="info"
                        >{{ detailData.severity}}</el-tag></p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                effect="dark"
                                size="mini"
                                type="info"
                        >{{ detailData.severity}}</el-tag></p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                effect="dark"
                                size="mini"
                                type="info"
                        >{{ detailData.severity}}</el-tag></p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                effect="dark"
                                size="mini"
                                type="info"
                        >{{ detailData.severity}}</el-tag></p>
                    </li>
                     
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less" >
@import url("./style.less");
</style>
<script>
// import { uploadUrl } from "./../../contants/serverUrl";
export default {
    data() {
        return {
            detailData: {},
        };
    },
    mounted: function() {
        this.detailData = this.$route.query;
        console.log("detail", this.detailData);
    },
    methods: {
       
        
    }
};
</script>