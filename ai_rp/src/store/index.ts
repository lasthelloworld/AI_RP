import { createStore } from 'vuex'
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  created_at?: string;
}

interface State {
  users: User[]
  isLoading: boolean
  error: string | null
}

export default createStore<State>({
  state: {
    users: [],
    isLoading: false,
    error: null
  },
  getters: {
  },
  mutations: {
    SET_USERS(state, users: User[]) {
      state.users = users;
    }
  },
  actions: {
    async fetchUsers({ commit }, searchTerm: string) {
      try {
        const response = await axios.get(`http://localhost:3000/api/users?name=${searchTerm}`);
        commit('SET_USERS', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        commit('SET_USERS', []);
      }
    }
  },
  modules: {
  }
})
