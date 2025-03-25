import React, { useState, useCallback, useContext } from 'react';
import StuContext from "../store/StuContext";

const Student = ({ stu: { id, name, age, gender, address } }) => {
    // 在参数中对props解构赋值，相当于：
    // {stu:{name, age, gender, address}} = props
    // 这样就可以直接使用name, age, gender, address了
    const deleteHandler = () => {
        // 删除学生
        // http://localhost:1337/api/students/4
        // props.stu.id
        delStu();

    };


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const ctx = useContext(StuContext);

    const delStu = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const url = 'http://localhost:1337/api/students/delete'
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    id: id
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

    }, [ctx, id]);




    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{address}</td>

                <td>
                    <button onClick={deleteHandler}>删除</button>
                </td>
            </tr>
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