import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from './index'; // 根据你的项目路径调整

const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api",
        //token 自动携带功能，每次请求都会自动携带token
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            console.log('Authorization', token)

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    endpoints(build) {
        return {
            // 登录
            login: build.mutation({
                query(user) {
                    return {
                        url: '/auth/local',
                        method: 'POST',
                        body: user,
                    }
                }
            }),
            // 注册
            register: build.mutation({
                query(user) {
                    return {
                        url: '/auth/local/register',
                        method: 'POST',
                        body: user,
                    }
                }
            }),
            getUser: build.query({
                query() {
                    return '/users';
                }
            }),
            getUserById: build.query({
                query(id) {
                    return `/users/${id}`;
                }
            }),
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
            // updateStudent: build.mutation({
            //     query(student) {
            //         return {
            //             url: `students/update/${student.id}`,
            //             method: 'POST',
            //             body: student,
            //         }
            //     },
            // }),
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
                        body: { id: stu.id, data: stu.data }
                    };
                }
            }),
        }
    }

})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetUserByIdQuery,
    useGetStudentsQuery,
    useGetStudentByIdQuery,
    useDelStudentMutation,
    useAddStudentMutation,
    // useUpdateStudentMutation 
} = Api;

export default Api;