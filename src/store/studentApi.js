import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return 'students';
                },
                transformResponse(responseData, meta, arg) {
                    return responseData.data;
                },

            }),
            getStudentById: build.query({
                query(id) {
                    return `students/${id}`;
                },
                transformResponse(baseQueryReturnValue, meta, arg) {
                    return baseQueryReturnValue.data;
                }
            }),
            createStudent: build.mutation({
                query(student) {
                    return {
                        url: 'students/create',
                        method: 'POST',
                        body: student,
                    }
                },
            }),
            updateStudent: build.mutation({
                query(student) {
                    return {
                        url: `students/update/${student.id}`,
                        method: 'POST',
                        body: student,
                    }
                },
            }),
            delStudent: build.mutation({
                query(id) {
                    return {
                        // 如果发送的get请求，需要返回一个对象来设置请求的信息
                        url: `students/delete`,
                        method: 'post',
                        body: { id },
                    };
                }
            }),
            addStudent: build.mutation({
                query(stu) {
                    return {
                        url: '/students/create',
                        method: 'post',
                        body: stu
                    }
                }
            }),
            updateStudent: build.mutation({
                query(stu) {
                    return {
                        url: '/students/update',
                        method: 'post',
                        body:{id:stu.id,data:stu.data}
                    };
                }
            }),
        }
    }

})

export const { useGetStudentsQuery, useGetStudentByIdQuery, useDelStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation } = studentApi;

export default studentApi;