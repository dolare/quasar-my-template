export const loginByUsername = ({commit}, userInfo) => {
  return userInfo.axios.post('/api/login', userInfo).then(({ data }) => {
    commit('SET_TOKEN', data.token)
    // setToken(data.token)
  })
}
