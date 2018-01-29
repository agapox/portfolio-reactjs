import React, { Component } from 'react';

class Users extends Component {

  render() {
        
    //endPoints = {
    //  users: {
    //    users: 'users',
    //    user: 'users/user',
    //    projects: 'users/user/projects',
    //    wips: 'users/user/wips',
    //    appreciations: 'users/user/appreciations',
    //    collections: 'users/user/collections',
    //    stats: 'users/user/stats',
    //    followers: 'users/user/followers',
    //    following: 'users/user/following',
    //    workExperience: 'users/user/work_experience'
    //  },
    //  projects: {
    //    projects: 'projects',
    //    id: 'projects/project_id',
    //    comments: 'projects/project_id/comments'
    //  },
    //  
    //}
    let behanceKey = 'TmeD365KQEmrpDQhcoEcZmv1BVQuI7Kh';
    let behanceBaseURL = 'https://api.behance.net/v2/';
    let endPoint = 'users/';
    let user = 'netsi-iriza'
    fecth( behanceBaseURL+ endPoint + user + '?client_id=' + behanceKey )
      .then((response) => {
          return response.json()
        })
        .then((recurso) => {
          console.log(recurso)
        })
    return(
      <div>
        hola
      </div>
    )
  }

}

export default Users;
/*
// https://api.behance.net/v2/users/netsi-iriza?client_id=TmeD365KQEmrpDQhcoEcZmv1BVQuI7Kh
let behanceKey = 'RK0zXHxkU9UbWmW2G5D8c8sxcIb6vR1q';
let behanceBaseURL = 'https://api.behance.net/v2/';
let endPoint = 'users/';
let memberBehanceUser = 'netsi-iriza';

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200 && this.withCredentials === true) {
    // Typical action to be performed when the document is ready:
    console.log(xhttp.response)
  }
};
xhttp.open("GET", behanceBaseURL + endPoint + memberBehanceUser + '?client_id=' + behanceKey, true);
xhttp.setRequestHeader('Access-Control-Allow-Origin','http://www.agapox.com.ve');

//xhttp.withCredentials = false;
xhttp.send();
*/