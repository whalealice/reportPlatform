<template>
    <div class="problemWrap">
        <div class="problemBtn">
            <el-button
                icon="el-icon-plus"
                type="primary"
                v-on:click="toCreatePage" 
            ><b>创建缺陷</b></el-button>
            <div>
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="searchName"
                @change="onSearch"
                clearable>
            </el-input>
            </div>
            
        </div>
        <div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                size='small'
                :stripe="true"
                :fit="true"
                @cell-click="cellClick"
                v-loading="listLoading"
            >

                <el-table-column
                    type="selection"
                    width="55"
                >

                </el-table-column>
                <el-table-column
                    label="标题"
                    width="240"
                    show-overflow-tooltip
                >
                    <template slot-scope="scope">
                        <el-tag
                            type="danger"
                            effect="dark"
                            size="mini"
                            trigger="hover"
                        >BUG</el-tag>
                        <label>&nbsp;{{ scope.row.title }}</label>
                    </template>
                </el-table-column>
                <el-table-column
                    label="优先级"
                    width="120"
                >
                    <template slot-scope="scope">
                        <div v-if="scope.row.influence === '高'">
                            <el-tag
                                type="danger"
                                effect="dark"
                                size="mini"
                            >{{ scope.row.influence }}</el-tag>
                        </div>
                        <div v-else-if="scope.row.influence === '中'">
                            <el-tag
                                type="success"
                                effect="dark"
                                size="mini"
                            >{{ scope.row.influence }}</el-tag>
                        </div>
                        <div v-else-if="scope.row.influence === '低'">
                            <el-tag
                                    type="info"
                                    effect="dark"
                                    size="mini"
                            >{{ scope.row.influence }}</el-tag>
                        </div>

                    </template>
                </el-table-column>
                <el-table-column
                    label="严重程度"
                    width="180"
                >
                    <template slot-scope="scope">
                        <div>
                            <span
                                class="dot dotRed"
                                v-if="scope.row.severity === '严重'"
                            ></span>
                            <span
                                class="dot dotGreen"
                                v-else-if="scope.row.severity === '一般'"
                            ></span>
                            <span
                                      class="dot dotGray"
                                      v-else-if="scope.row.severity === '建议'"
                            ></span>
                            {{ scope.row.severity }}
                        </div>

                    </template>
                </el-table-column>
                <el-table-column
                    label="状态"
                    width="180"
                >
                    <template slot-scope="scope">
                        <el-tag
                            size="mini"
                            effect="plain"
                            type="success"
                            v-if="scope.row.platform === '新'"
                        >{{ scope.row.platform }}</el-tag>
                        <el-tag
                                size="mini"
                                effect="plain"
                                type="info"
                                v-else-if="scope.row.platform === '已关闭'"
                        >{{ scope.row.platform }}</el-tag>
                        <el-tag
                                size="mini"
                                effect="plain"
                                type=""
                                v-else
                        >{{ scope.row.platform }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="openid"
                    label="创建时间"
                    width="180"
                >
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="创建人"
                >
                </el-table-column>
            </el-table>
            <div class="pagintion">
                <el-pagination
                        layout="total, sizes, prev, pager, next, jumper"
                        :current-page="pageInfo.pageNumber"
                        :page-sizes="[10,50,100,200]"
                        :page-size="pageInfo.pageSize"
                        :total="pageInfo.count"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.problemWrap {
    margin: 10px 20px;
    flex: 1;
    .problemBtn {
        width: 100%;
        margin-bottom: 10px;
        display: inline-flex;
        justify-content: space-between;
    }
    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 4px;
    }
    .dotRed {
        background: #f56c6c;
    }
    .dotGreen {
        background: #67c23a;
    }
    .dotGray {
    background: #b9b9b9;
    }
    .pagintion {
        margin-top: 20px;
        text-align: right;
    }
}
</style>
<script>
import apis from "../../apis/apis";
export default {
    data() {
        return {
            listLoading : false,
            searchName: "",
            pageInfo: {
                pageNumber: 1,
                pageSize: 10,
                count: 0
            },
            bugSearch: {
                openid: "",
                title: ""
            },
            tableData: [],
            multipleSelection: []
        };
    },
    mounted(){
        this.onSearch();
    },
    methods: {
        // 查询问题列表
        onSearch() {
            this.listLoading = true;
            this.bugSearch.title = this.searchName
            let param = Object.assign({}, this.bugSearch, this.pageInfo);
            apis.problemApi
                    .getList(param)
                    .then(res => {
                this.listLoading = false;
            if (res && res.data) {
                var json = res.data;
                if (json && json.code == "0") {
                    this.tableData = json.data;
                    this.pageInfo.count = json.bugcount
                    return;
                }
            }
            this.$message({ message: "执行失败，请重试", type: "error" });
        })
        .catch(err => {
                this.listLoading = false;
                console.log(err)
                this.$message({ message: "查询异常，请重试 ", type: "error" });
        });
        },
        // 点击某一行带参数跳转到详情页
        cellClick(row){
            console.log('cellClick', row)
            // row 这一行的数据
            this.$router.push({ path: "/home/detail", query: row });
        },
        handleSelectionChange(val) {
//            console.log('handleSelectionChange', Axios, getList)
            this.multipleSelection = val;
//             this.$message({
//                 message: '选中的项是:' + JSON.stringify(this.multipleSelection),
//                 type: "success"
//             });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageInfo.pageSize = val;
            this.onSearch();
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageInfo.pageNumber = val;
            this.onSearch();
        },
        toCreatePage(){
            this.$router.push({ path: "/home/create" });
        }
    }
};
</script>