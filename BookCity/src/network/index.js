import {request} from 'network/request.js'


//一级分类
const class1 = request({
    url:"category/list",
    params:{
        pid:0
    }
});

export {class1}


