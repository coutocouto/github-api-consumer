const { UserConsumer } = require('../consumer')
const userConsumer = new UserConsumer()

class UserController {
  static async getUserDetails (request, response) {
    try {
      if (!request.params) throw new Error('404 Not Found name is empety')
      const { username } = request.params
      const userDetails = await userConsumer.consumeUserDetails(username)
      return response.status(200).json(userDetails)
    } catch (error) {
      return response.status(404).json(error.message)
    }
  }

  static async getUsersSinceId (request, response) {
    try {
      if (!request.query.since) throw new Error('404 Not Found Parameter is not a number!')
      const sinceId = request.query.since
      const allUserSinceId = await userConsumer.consumeUserSinceId(sinceId)
      const nextPage = allUserSinceId[allUserSinceId.length - 1].id
      allUserSinceId[allUserSinceId.length - 1].link_for_next = `${request.route.path}?since=${nextPage + 1}`
      return response.status(200).json(allUserSinceId)
    } catch (error) {
      return response.status(404).json(error.message)
    }
  }

  static async getUserRepository (request, response) {
    try {
      if (!request.params) throw new Error('404 Not Found name is empety')
      const { username } = request.params
      const userRepository = await userConsumer.consumeUserRepository(username)
      return response.status(200).json(userRepository)
    } catch (error) {
      return response.status(404).json(error.message)
    }
  }
}

module.exports = {
  UserController
}
