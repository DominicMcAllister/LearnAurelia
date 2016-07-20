import {HttpClient} from 'aurelia-http-client';
import {HttpClient as HttpFetch} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient, HttpFetch)
export class Github{
    constructor(httpClient, fetchClient){
        this.httpClient = httpClient;
        this.fetchClient = fetchClient;

        this.loadingUser = false;
        this.userRepos = false;
    }

    searchUser(how){

        switch(how){
            case 'http': this.searchWithHttp(); break;
            case 'fetch': this.searchWithFetch(); break;
        }
    }

    searchWithHttp(){
        this.method = 'http';

        this.loadingUser = true;
        this.httpClient.get('https://api.github.com/users/' + this.username)
                       .then(result =>{
                           this.userDetails = JSON.parse(result.response);
                           this.loadingUser = false;

                        //    userDetails.repos

                            this.loadingRepos = true;
                            this.httpClient.get(this.userDetails.repos_url)
                                           .then(repoResult =>{
                                                this.loadingRepos = false;
                                                this.userDetails.repos = JSON.parse(repoResult.response);
                                           });
                       },
                       error => {
                           this.loadingUser = false;
                           this.userDetails = undefined;
                       });
    }

    searchWithFetch(){
        this.method = 'fetch';

        this.loadingUser = true;
        this.fetchClient.fetch('https://api.github.com/users/' + this.username)
                        .then(response => response.json())
                        .then(data =>{
                            this.userDetails = data;
                            this.loadingUser = false;

                            this.fetchClient.fetch(this.userDetails.repos_url)
                                            .then(reposResponse => reposResponse.json())
                                            .then(reposData =>{
                                                this.loadingRepos = false;
                                                this.userDetails.repos = reposData;
                                            });
                        }).catch(err =>
                        {
                            //todo something with the error
                        });
    }
}

// var getUser = function(username) {
//       return $http.get('https://api.github.com/users/' + username)
//                   .then(function(response) {
//                     return response.data;
//                   });
//     };

//     var getRepos = function(user) {
//       return $http.get(user.repos_url)
//                   .then(function(response) {
//                     return response.data;
//                   });
//     };
    
//     var getRepoDetails = function(name, repo){
//       //https://api.github.com/repos/<name>/<repo>
//       var url = 'https://api.github.com/repos/' + name + '/' + repo;
//             return $http.get(url)
//                   .then(function(response) {
//                     return response.data;
//                   });
//     };
    
//     var getRepoContributors = function(name, repo){
//       //https://api.github.com/repos/<name>/<repo>/contributors
//             var url = 'https://api.github.com/repos/' + name + '/' + repo + '/contributors';
//             return $http.get(url)
//                   .then(function(response) {
//                     return response.data;
//                   });
//     };