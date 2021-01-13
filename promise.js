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
        content: '1111111'
    }, {
        id: 2,
        users_id: 2,
        content: '222222'
    }, {
        id: 3,
        users_id: 1,
        content: '3333333'
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
    .then(function (dataCmt) {
        var userIds = dataCmt.map(function (valueCmts) {
            return valueCmts.users_id
        })
        return getUsersByIds(userIds)
    })
    .then(function (dataUsersCmts) {
        return {
            users: dataUsersCmts,
            comments: comments
        }
    })
    .then(function (data) {
        var theHienCmt = document.getElementById('ul-main')
        var html = ''
        data.comments.forEach(function(value){
            var user = data.users.find(function(valueUser){
                return valueUser.id == value.users_id
            })
            html += `<li>${user.name}: ${value.content}</li>`
        })
        
        theHienCmt.innerHTML = html
    })

function getUsersByIds(array) {
    return new Promise(function (res) {
        var result = users.filter(function (valueUsers) {
            return array.includes(valueUsers.id)
        })
        setTimeout(function () {
            res(result)
        }, 1000)
    })
}

