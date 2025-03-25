import React, { useState, useCallback, useContext } from 'react';
import StuContext from "../store/StuContext";
import StudentForm from "./StudentForm";
const Student = (props) => {
    // 在参数中对props解构赋值，相当于：
    // {stu:{name, age, gender, address}} = props
    // 这样就可以直接使用name, age, gender, address了

    const [showChange, setShowChange] = useState(false);
    const deleteHandler = () => {
        // 删除学生
        // http://localhost:1337/api/students/4
        // props.stu.id
        delStu();

    };


    const cancelEdit = () => {
        setShowChange(false);
    };


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const ctx = useContext(StuContext);

    const delStu = useCallback(async () => {
        try {
            const url = 'http://localhost:1337/api/students/delete'
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    id: props.stu.id
                })
            })

            // 判断是否成功
            if (!res.ok) {
                throw new Error('删除失败！');
            }

            // const data = await res.json(); // 被删除的学生
            // 修改成功后，需要触发列表刷新
            ctx.fetchData();
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }

    }, [ctx, props.stu.id]);

  

    return (
        <>
           {!showChange &&
                <tr>
                    <td>{props.stu.name}</td>
                    <td>{props.stu.gender}</td>
                    <td>{props.stu.age}</td>
                    <td>{props.stu.address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        <button onClick={() => setShowChange(true)}>修改</button>

                    </td>
                </tr>
            }

            {showChange && <StudentForm stu={props.stu} onCancel={cancelEdit}/>}
            {loading && <tr>
                <td colSpan={5}>正在删除数据...</td>
            </tr>}
            {error && <tr>
                <td colSpan={5}>删除失败...</td>
            </tr>}
        </>
    );
};

export default Student;