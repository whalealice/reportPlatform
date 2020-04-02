<template>
    <div class="createWrap contentWrap">
        <div class="headerBox">创建缺陷</div>
        <div class="mainBox">
            <div class="mainLeft">
                <div class="mainTitle">
                    <el-input
                        type="input"
                        placeholder="请输入标题"
                        v-model="textarea1"
                    >
                    </el-input>
                </div>

                <p class="mainText">
                    【问题描述】
                </p>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea2"
                ></el-input>

                <p class="mainText">
                    【截图】
                </p>
                <el-upload
                    class="avatar-uploader"
                    :action="uploadUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img
                        v-if="imageUrl"
                        :src="imageUrl"
                        class="avatar"
                    >
                    <i
                        v-else
                        class="el-icon-plus avatar-uploader-icon"
                    ></i>
                </el-upload>

                <p class="mainText">
                    【链接地址】
                </p>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3"
                ></el-input>

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
                        <el-select
                            v-model="ruleForm.region"
                            placeholder="请选择优先级"
                        >
                            <el-option
                                v-for="item in versionList"
                                :key="item.label"
                                :label="item.name"
                                :value="item.label"
                            ></el-option>
                        </el-select>
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
                <div class="upLoad">
                    附件
                    <el-upload
                        class="uploadBtn"
                        :action="uploadUrl"
                        :on-change="handleChange"
                        :file-list="fileList"
                    >

                        <i class="el-icon-plus"></i>
                        <span>添加</span>
                        <!-- <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                </div>
            </div>
        </div>
        <div class="footerBox">
            <el-button
                type="primary"
                @click="submitForm('ruleForm')"
            >提交</el-button>
            <el-button @click="cancelForm('ruleForm')">取消</el-button>
        </div>
    </div>
</template>

<style lang="less" >
@import url("./style.less");
</style>
<script>
import { uploadUrl } from "./../../contants/serverUrl";
export default {
    data() {
        return {
            uploadUrl: uploadUrl,
            versionList: [], // 版本列表
            textarea1: "",// todo
            textarea2: "",// todo
            textarea3: "", // todo
            ruleForm: {
                // todo
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
                // todo 表单的验证规则
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
            },
            fileList: [], // 添加附件
            imageUrl: '', // 截图
        };
    },
    mounted: function() {
        // 写请求
        const arr = [
            { value: "gao", label: "高" },
            { value: "zhong", label: "中" },
            { value: "di", label: "低" }
        ];
        this.versionList = arr;
        console.log("uploadUrl", uploadUrl);
    },
    methods: {
        // 添加附件
        handleChange(file, fileList) {
            console.log("upload", file, fileList);

            this.fileList = fileList.slice(-3);
        },
        // 截图
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log("aaa", valid);
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        cancelForm() {
            this.$router.push({ path: "/home/problem" });
            // this.$refs[formName].resetFields();
        }
    }
};
</script>