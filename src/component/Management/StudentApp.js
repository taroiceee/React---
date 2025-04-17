import React from 'react';

import {useGetStudentsQuery} from "../../store/studentApi";
import StudentList from './Student/StudentList';

const StudentApp = () => {

        const result = useGetStudentsQuery(null, {
            pollingInterval:0, // 设置轮询的间隔，单位毫秒 如果为0则表示不轮询
            skip:false, // 设置是否跳过当前请求，默认false
            refetchOnMountOrArgChange:false, // 设置是否每次都重新加载数据 false正常使用缓存
            refetchOnFocus:false, // 是否在重新获取焦点时重载数据
            refetchOnReconnect:true, // 是否在重新连接后重载数据
        });
        const {data: stus, isSuccess, isLoading, refetch} = result; // 调用Api中的钩子查询数据
    
    
        return (
            <div>
                <button onClick={() => refetch()}>刷新</button>
                {isLoading && <p>数据加载中...</p>}
                {isSuccess && <StudentList stus={stus}/>}
        </div>

    );
};

export default StudentApp;
