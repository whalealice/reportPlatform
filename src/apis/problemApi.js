import Axios from "axios";

/**
 * 提供problem相关接口
 */
export default {
    // 列表
    getList(params){
        var param={
            ...params
        };
        return Axios.post('/api/bug/getlist', param );
    },
}
