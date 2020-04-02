<template>
    <div class="detailWrap contentWrap">
        <div class="headerBox">
            <el-tag
                type="danger"
                effect="dark"
                size="mini"
            >BUG</el-tag>
            <span class="headerText">{{detailData.address}}</span>
        </div>
        <div class="mainBox">
            <div class="mainLeft">
                <p class="mainText">
                    【问题描述】
                </p>
                <p>
                    {{detailData.aa}}
                </p>

                <p class="mainText">
                    【截图】
                </p>

                <p>
                    {{detailData.bb}}
                </p>
                <p class="mainText">
                    【链接地址】
                </p>
                <p>
                    {{detailData.cc}}
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
                                {{ detailData.bb }}
                            </el-tag>
                        </p>
                    </li>
                    <li>
                        <p>创建人 <i class="el-icon-question"></i></p>
                        <p>{{detailData.bb}}</p>
                    </li>
                    <li>
                        <p>创建人</p>
                        <p><el-tag
                                type="danger"
                                effect="dark"
                                size="mini"
                            >{{ detailData.name }}</el-tag></p>
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