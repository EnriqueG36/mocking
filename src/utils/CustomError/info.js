exports.generateUserErrorInfo = (user) => {
    return `One of more properties are incomplete or are invalid:
    * first_name: required string, received ${user.first_name}
    * last_name: required string, received ${user.last_name}
    * email: required string, received ${user.email}`
}