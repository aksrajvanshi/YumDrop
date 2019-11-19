const io = require('./serverIndex').io

const {VERIFY_USER, USER_CONNECTED, LOGOUT} = require('../Events')
const {createUser, createMessage, createChat} = require('../Factories')
let connectedUser  = {}

module.exports = function (socket) {
    console.log("Socket ID : "+socket.id)
    socket.on(VERIFY_USER, (username, callback) => {
        if(isUser(connectedUser, username)){
            callback({isUser: true, user: null      })
    }else{
            callback({isUser:false, user: createUser({name:username})})
        }
    })

    socket.on(USER_CONNECTED, (user)=>{
        connectedUser =  addUser(connectedUser, user)
        socket.user = user
        io.emit(USER_CONNECTED, connectedUser)
        console.log(connectedUser)
    })
}

function addUser(userList, user){
    let newList   = Object.assign({}, userList)
     newList[user.name] = user
    return newList
}

function removeUser(userList, username){
    let newList   = Object.assign({}, userList)
    delete newList[username]
    return newList
}
function isUser(userList, username) {
    return username in userList
}