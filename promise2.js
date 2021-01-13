var users = [
    {
        id: 1,
        name: 'Nguyen Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    },
]

var comments = [
    {
        id: 1,
        users_id: 1,
        content: 'content 1'
    }, {
        id: 2,
        users_id: 2,
        content: 'content 2'
    }, {
        id: 3,
        users_id: 1,
        content: 'content 3'
    },
]

function getComments() {
    return new Promise(function (res) {
        setTimeout(function () {
            res(comments)
        }, 1000)
    })
}

getComments()
    .then(function (cmts) {
        var userIds = cmts.map(function (ids) {
            return ids.users_id
        })
        return getUsersByIds(userIds)
    })
    .then(function(data){
        var html = ''
        var theHienCmts = document.getElementById('ul-main')
        data.comments.forEach(function(comment){
        var a =    data.users.find(function(user){
                return user.id == comment.users_id
            })
            html += `<li>${a.name}: ${comment.content}</li>`
        })
        theHienCmts.innerHTML = html
    })

function getUsersByIds(array){
    return new Promise (function(res){
        var result = users.filter(function(user){
            return array.includes(user.id)
        })
        setTimeout(function(){
            res({users: result,
                comments: comments})
        }, 1000)
    })
}
