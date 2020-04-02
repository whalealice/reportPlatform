<template>
    <div class="problemWrap">
        <div class="problemBtn">
            <el-button
                icon="el-icon-plus"
                type="primary"
                v-on:click="toCreate" 
            >创建缺陷</el-button>
            <div>
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="searchName">
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
            >

                <el-table-column
                    type="selection"
                    width="55"
                >

                </el-table-column>
                <el-table-column
                    type="index"
                    width="50"
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
                        >BUG</el-tag>
                        <el-popover
                            trigger="hover"
                            placement="top"
                        >
                            {{ scope.row.address }}
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="优先级"
                    width="120"
                >
                    <template slot-scope="scope">
                        <div v-if="scope.row.name === '高'">
                            <el-tag
                                type="danger"
                                effect="dark"
                                size="mini"
                            >{{ scope.row.name }}</el-tag>
                        </div>
                        <div v-else-if="scope.row.name === '中'">
                            <el-tag
                                type="success"
                                effect="dark"
                                size="mini"
                            >{{ scope.row.name }}</el-tag>
                        </div>

                    </template>
                </el-table-column>
                <el-table-column
                    prop="aa"
                    label="严重程度"
                    width="180"
                >
                    <template slot-scope="scope">
                        <div>
                            <span
                                class="dot dotRed"
                                v-if="scope.row.name === '高'"
                            ></span>
                            <span
                                class="dot dotGreen"
                                v-else-if="scope.row.name === '中'"
                            ></span>
                            {{ scope.row.aa }}
                        </div>

                    </template>
                </el-table-column>
                <el-table-column
                    prop="bb"
                    label="状态"
                    width="180"
                >
                    <template slot-scope="scope">
                        <el-tag
                            size="mini"
                            effect="plain"
                            type="success"
                            v-if="scope.row.bb === '新'"
                        >{{ scope.row.bb }}</el-tag>
						<el-tag
                            size="mini"
                            effect="plain"
                            type="info"
                            v-else-if="scope.row.bb === '已解决'"
                        >{{ scope.row.bb }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="创建时间"
                    width="180"
                >
                </el-table-column>
                <el-table-column
                    prop="person"
                    label="创建人"
                >
                </el-table-column>
            </el-table>
            <div class="pagintion">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.problemWrap {
    // width: 100%;
    // background: #ffffff;
    margin: 10px 20px;
    flex: 1;
    .problemBtn {
        // text-align: left;
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
    .pagintion {
        margin-top: 20px;
        text-align: right;
    }
}
</style>
<script>
import Axios from "axios";
import {api} from "./../../contants/serverUrl";
export default {
    data() {
        return {
            currentPage: 1,
            searchName:'',
            tableData: [
                {
                    name: "高",
                    aa: "严重",
                    bb: "新",
                    date: "2020-03-29",
                    address: "上海市普陀区金沙江路 1518 弄",
                    person: "maxinning"
                },
                {
                    name: "中",
                    aa: "严重",
                    bb: "已解决",
                    date: "2020-03-29",
                    address: "上海市普陀区金沙江路 1518 弄",
                    person: "maxinning"
                }
            ],
            multipleSelection: []
        };
    },

    methods: {
        toggleSelection(rows) {
           
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
             console.log('111', Axios, api)
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        toCreate(){
            this.$router.push({ path: "/home/create" });
        }
    }
};
</script>