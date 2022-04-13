const axios = require('axios')

class UserConsumer {
  async consumeUserDetails (username) {
    const {
      login: userLogin,
      id: userId,
      html_url: userUrlProfile,
      created_at: userCreateDate
    } = await axios.get(`https://api.github.com/users/${username}`)
      .then(response => response.data)

    return { userLogin, userId, userUrlProfile, userCreateDate }
  }

  async consumeUserSinceId (sinceId) {
    return await axios.get(`https://api.github.com/users?since=${sinceId}`).then(response => response.data)
  }

  async consumeUserRepository (username) {
    return await axios.get(`https://api.github.com/users/${username}/repos`).then(response => response.data)
  }
}

module.exports = {
  UserConsumer
}
