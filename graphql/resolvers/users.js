const User = require('../../models/Usermodel')

module.exports = {
  Mutation: {
    register(parent, args, context, info) {
      //TODO Validate user data
      //TODO Make sure user doesnt already exist
      //TODO Hash password and create an auth token
    },
  },
}
