import React, { useState, useContext, useCallback, useEffect } from 'react';
import './StudentForm.css';
import StuContext from "../../../store/StuContext";
import { useGetStudentByIdQuery, useAddStudentMutation, useUpdateStudentMutation } from '../../../store/studentApi';

const StudentForm = (props) => {
    // 调用钩子来加载数据
    const { data: stuData } = useGetStudentByIdQuery(props.stuId);

    // 用户修改时，表单中的数据是数据库中最新的数据
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        gender: '男',
        address: ''
    });
    const [addStudent, { isSuccess: isAddSuccess }] = useAddStudentMutation();
    const [updateStudent, { isSuccess: isUpdateSuccess }] = useUpdateStudentMutation();

    
    useEffect(() => {
        if (stuData) {
            setInputData(stuData);
        }
    }, [stuData]);




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

    // const onsubmit = async (newStu) => {
    //     try {
    //         const res = await fetch('http://localhost:1337/api/students/create', {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": 'application/json'
    //             },
    //             body: JSON.stringify(
    //                 newStu)
    //         }
    //         );
    //         // 判断是否成功
    //         if (!res.ok) {
    //             throw new Error('删除失败！');
    //         }

    //         ctx.fetchData();
    //     } catch (e) {

    //     }
    // }
    const updateHandler = () => {
        updateStudent({
            id: props.stuId,
            data: {
                name: inputData.name,
                age: inputData.age,
                gender: inputData.gender,
                address: inputData.address,
                // documentId:inputData.documentId,
            }
        });
        props.onCancel();
        console.log('props.stuId',props.stuId,'inputData.id',inputData.id);
        
    };

    const submitHandler = () => {
        addStudent(inputData);
        setInputData({
            name: '',
            age: '',
            gender: '男',
            address: ''
        });
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

                {props.stuId && <>
                    <button onClick={() => props.onCancel()}>取消</button>
                    <button onClick={updateHandler}>确认</button>
                </>}
                {!props.stuId &&
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