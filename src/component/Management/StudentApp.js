import React, { useEffect, useState, useCallback } from 'react';
import classes from './StudentApp.module.css';
import StudentList from './Student/StudentList';

import StuContext from "./store/StuContext";

const StudentApp = () => {

    const [stuData, setStuData] = useState([]);

    // 设置加载状态
    const [loading, setLoading] = useState(false);

    // 设置错误信息
    const [error, setError] = useState(null);

    // 使用Fetch请求数据，在初始化时发送请求
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch('http://localhost:1337/api/students');
            //判断请求是否加载成功
            if (res.ok) {
                const data = await res.json();
                setStuData(data.data);
            } else {
                throw new Error('数据加载失败！');
            }
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);


    // 使用useEffect来发送请求，仅在初始化时发送请求
    useEffect(() => {
        fetchData();
    }, [fetchData]);


    


    const loadDataHandler = () => {
        fetchData();
    };

    return (
        <StuContext.Provider value={{ fetchData }}>
            <div className={classes.StudentApp}>
                <button className={classes.loadButton} onClick={loadDataHandler}>刷新数据</button>
                {(!loading && !error) && <StudentList stus={stuData} />}
                {loading && <p>数据加载中...</p>}

                {error && <p>数据加载异常！</p>}
            </div>
        </StuContext.Provider>

    );
};

export default StudentApp;
