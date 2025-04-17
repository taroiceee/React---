import React, { useState, useCallback } from 'react';
import { useDelStudentMutation } from '../../../store/studentApi';
// import StuContext from "../../../store/StuContext";
import StudentForm from "./StudentForm";
const Student = (props) => {

    const [showChange, setShowChange] = useState(false);
    const [deleteStudent, { isSuccess }] = useDelStudentMutation();
    const deleteHandler = () => {
        // 删除学生
        deleteStudent(props.stu.id);
    };

    const cancelEdit = () => {
        setShowChange(false);
    };


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);




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

            {showChange && <StudentForm stuId={props.stu.id} onCancel={cancelEdit} />}
            {
                isSuccess && <tr>
                    <td colSpan="5">
                        数据已删除！
                    </td>
                </tr>
            }
        </>
    );
};

export default Student;