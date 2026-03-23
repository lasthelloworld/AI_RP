import { createStore } from 'vuex'
import axios from 'axios'

// 定义用户对象接口类型
interface User {
    id: number;
    name: string;
    email: string;
    created_at?: string;
}

// 定义状态接口类型
interface State {
    users: User[];
    isLoading: boolean;
    error: string | null;
}

// 创建store实例
const store = createStore<State>({
    state: {
        users: [],
        isLoading: false,
        error: null
    },
    mutations: {
        SET_LOADING(state, loading: boolean) {
            state.isLoading = loading;
        },
        SET_USERS(state, users: User[]) {
            state.users = users;
        },
        SET_ERROR(state, error: string | null) {
            state.error = error;
        }
    },
    actions: {
        // 添加searchUsers action
        async searchUsers({ commit }, keyword: string) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            
            try {
                // 调用后端API
                const response = await axios.get(`http://localhost:3000/api/users/search?keyword=${encodeURIComponent(keyword)}`);
                
                if (response.data.success) {
                    commit('SET_USERS', response.data.data);
                } else {
                    commit('SET_ERROR', response.data.message || '查询失败');
                }
            } catch (error) {
                commit('SET_ERROR', '网络请求失败');
                console.error('用户查询错误:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        }
    }
});

export default store;