<template>
    <div class="createWrap">
        <div class="header">创建缺陷</div>
        <div class="main">
            <div class="mainLeft">
                <div>
                    【问题描述】
                </div>
                <div>
                    【截图】
                </div>
                <div>
                    【链接地址】
                </div>
            </div>
            <div class="mainRight">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="ruleForm"
                >
                    <el-form-item
                        label="发现版本"
                        prop="name"
                    >
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="优先级"
                        prop="region"
                    >
                        <el-select
                            v-model="ruleForm.region"
                            placeholder="请选择优先级"
                        >
                            <el-option
                                label="高"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="中"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                        label="严重程度"
                        prop="region1"
                    >
                        <el-select
                            v-model="ruleForm.region1"
                            placeholder="请选择严重程度"
                        >
                            <el-option
                                label="严重"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="一般"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="处理人"
                        prop="name1"
                    >
                        <el-input v-model="ruleForm.name1"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="迭代"
                        prop="region2"
                    >
                        <el-select
                            v-model="ruleForm.region2"
                            placeholder="请选择优先级"
                        >
                            <el-option
                                label="严重"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="一般"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="发现阶段"
                        prop="region3"
                    >
                        <el-select
                            v-model="ruleForm.region3"
                            placeholder="请选择发现阶段"
                        >
                            <el-option
                                label="严重"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="一般"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="发现环境"
                        prop="region4"
                    >
                        <el-select
                            v-model="ruleForm.region4"
                            placeholder="请选择发现环境"
                        >
                            <el-option
                                label="严重"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="一般"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>

                </el-form>
                <div>
                    ssss
                </div>
            </div>
        </div>
        <div class="footer">
            <el-button
                type="primary"
                @click="submitForm('ruleForm')"
            >提交</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.createWrap {
    // width: 100%;
    height: 100%;
    background: #ffffff;
    margin: 10px 20px;
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    .header {
        height: 50px;
        line-height: 50px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #f1f1f1f1;
        font-size: 16px;
    }
    .main {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        flex: 1;
        border-bottom: 1px solid #f1f1f1;
        .mainLeft {
            // width: 60%;
            text-align: left;
            padding: 10px;
            flex: 1;
        }
        .mainRight {
            border-left: 1px solid #f1f1f1;
            width: 400px;
            padding: 10px;
            .ruleForm {
                border-bottom: 1px solid #f1f1f1;
            }
        }
    }
    .footer {
        text-align: left;
        padding: 20px 10px;
    }
}
</style>
<script>
export default {
    data() {
        return {
            ruleForm: {
                name: "",
                name1: "",
                region: "",
                region1: "",
                region2: "",
                region3: "",
                region4: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符",
                        trigger: "blur"
                    }
                ],
                name1: [
                    {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符",
                        trigger: "blur"
                    }
                ],
                region: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change"
                    }
                ],
                region1: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change"
                    }
                ],
                region2: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change"
                    }
                ],
                region3: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change"
                    }
                ],
                region4: [
                    {
                        required: true,
                        message: "请选择活动区域",
                        trigger: "change"
                    }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>