import Axios from "axios";

/**
 * 提供problem相关接口
 */
export default {
    // 问题列表
    getList(params){
        var param={
            ...params
        };
        return Axios.post('/api/bug/getlist', param );
    },
    // 配置列表
    getConfig(params){
        var param={
            ...params
        };
        return Axios.post('/api/config/getlist', param );
    }
}
