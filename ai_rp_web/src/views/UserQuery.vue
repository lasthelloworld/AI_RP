<template>
    <div class="user-query">
        <h1>用户查询系统</h1>

        <div class="search-box">
            <input v-model="searchKeyword"  type="text" placeholder="输入用户名" />
            <button @click="searchUsers">查询</button>
        </div>

        <div v-if="loading" class="loading">加载中...</div>

        <div v-else-if="error" class="error">{{ error }}</div>

        <div v-else-if="users.length === 0" class="no-data">
            未找到用户数据
        </div>

        <table v-else class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>邮箱</th>
                    <th>创建时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.created_at }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

//定义用户对象接口类型
interface User {
    id: number;
    name: string;
    email: string;
    created_at?: string;// 可选属性
}

export default defineComponent({
    name: 'UserQuery',

    setup() {
        const store = useStore()
        const searchKeyword = ref('')
        const users = computed<User[]>(() => store.state.users);
        const loading = computed<boolean>(() => store.state.isLoading)
        const error = computed<string | null>(() => store.state.error)
        const searchUsers = async () => {
            if (!searchKeyword.value.trim()) return
            
            try {
                // 调用 Vuex action 进行搜索，在ai_rp/src/store/index.ts中定义
                await store.dispatch('searchUsers', searchKeyword.value)
            } catch (err) {
                console.error('用户查询错误:', err)
            }
        }

        return {
            searchKeyword,
            users,
            loading,
            error,
            searchUsers
        }
    }
})
</script>

<style scoped>
.user-query {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.search-box {
    display: flex;
    margin-bottom: 20px;
}

.search-box input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
}

.search-box button {
    padding: 10px 20px;
    margin-left: 10px;
    background: #42b983;
    color: white;
    border: none;
    cursor: pointer;
}

.user-table {
    width: 100%;
    border-collapse: collapse;
}

.user-table th,
.user-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.user-table th {
    background-color: #f2f2f2;
}

.loading,
.error,
.no-data {
    text-align: center;
    padding: 20px;
    font-size: 18px;
}

.error {
    color: #ff5252;
}
</style>