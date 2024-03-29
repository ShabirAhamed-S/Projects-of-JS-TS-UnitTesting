const axios = require('axios');

class User {
    constructor(userName, viewRepos = false) {
        this.userName = userName;
        this.canViewRepos = viewRepos;
    }

    getUserId() {
        return axios.get(`https://api.github.com/users/${this.userName}`)
            .then(response => response.data.id)
            .then();
    }

    getUserRepo(repoIndex) {
        if (this.canViewRepos) {
            return axios.get(`https://api.github.com/users/${this.userName}/repos`)
                .then(response => response.data[repoIndex - 1])
        }

        return Promise.reject('Cannot view repos');
    }

}

module.exports = User