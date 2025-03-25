import React, { useState, useContext, useCallback } from 'react';
import './StudentForm.css';
import StuContext from "../store/StuContext";

const StudentForm = (props) => {
    const [inputData, setInputData] = useState({
        name: props.stu ? props.stu.name : '',
        age: props.stu ? props.stu.age : '',
        gender: props.stu ? props.stu.gender : '男',
        address: props.stu ? props.stu.address : ''
    });


    const ctx = useContext(StuContext);

    const nameChangeHandler = (e) => {
        setInputData({
            ...inputData,
            name: e.target.value
        })
    }

    const genderChangeHandler = (e) => {
        setInputData({
            ...inputData,
            gender: e.target.value
        })
    }

    const ageChangeHandler = (e) => {
        setInputData({
            ...inputData,
            age: e.target.value
        })
    }

    const addressChangeHandler = (e) => {
        setInputData({
            ...inputData,
            address: e.target.value
        })
    }

    const onsubmit = async (newStu) => {
        try {
            const res = await fetch('http://localhost:1337/api/students/create', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(
                    newStu)
            }
            );
            // 判断是否成功
            if (!res.ok) {
                throw new Error('删除失败！');
            }

            ctx.fetchData();
        } catch (e) {

        }
    }
    const updateHandler = () => {
        saveData(props.stu.id, inputData);
    };

    const submitHandler = () => {
        //console.log(inputData);
        onsubmit(inputData);
    };

    const saveData = useCallback(async (id, data) => {
        try {
            const params = { id, ...data }
            const url = 'http://localhost:1337/api/students/update';
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(params)
            })

            // 判断是否成功
            if (!res.ok) {
                throw new Error('修改失败！');
            }
            // 修改成功后，需要触发列表刷新
            ctx.fetchData();
        } catch (e) {
            console.log(e);
        }
    }, [ctx]); // 确保 ctx 在依赖项数组中

    return (
        <tr className="studentForm">
            <td>
                <input
                    type="text"
                    placeholder="姓名"
                    onChange={nameChangeHandler}
                    value={inputData.name} />
            </td>
            <td>
                <select
                    onChange={genderChangeHandler}
                    value={inputData.gender}>
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
            </td>
            <td>
                <input type="text"
                    placeholder="年龄"
                    onChange={ageChangeHandler}
                    value={inputData.age} />
            </td>
            <td>
                <input type="text"
                    placeholder="地址"
                    onChange={addressChangeHandler}
                    value={inputData.address} />
            </td>

            <td>

                {props.stu && <>
                    <button onClick={() => props.onCancel()}>取消</button>
                    <button onClick={updateHandler}>确认</button>
                </>}
                {!props.stu &&
                        <button
                            onClick={submitHandler}
                        >添加
                        </button>
                    }

            </td>
        </tr>
    )
}

export default StudentForm;