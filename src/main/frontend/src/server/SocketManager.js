import {MESSAGE_RECEIVED} from "../Events";

const io = require('./serverIndex').io

const {VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED,LOGOUT} = require('../Events')
const {createUser, createMessage, createChat} = require('../Factories')
let connectedUser  = {}
let sendMessageToChatFromUser;

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
        sendMessageToChatFromUser = sendMessageToChat(user.name)
        io.emit(USER_CONNECTED, connectedUser)
        console.log(connectedUser)
    })

    socket.on('disconnect', ()=> {
        if("user" in socket){
            connectedUser = removeUser(connectedUser,socket.user.name)
            io.emit(USER_DISCONNECTED, connectedUser)
            console.log(connectedUser)
        }
    })
}

function addUser(userList, user){
    let newList   = Object.assign({}, userList)
     newList[user.name] = user
    return newList
}

function sendMessageToChat(sender){
    return (chatId, message) => {
        io.emit(`${MESSAGE_RECEIVED}-{chat.id}`, createMessage({message,sender}))
    }
}

function removeUser(userList, username){
    let newList   = Object.assign({}, userList)
    delete newList[username]
    return newList
}
function isUser(userList, username) {
    return username in userList
}