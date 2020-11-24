import Axios from 'axios'

export const apisUser= async ({username})=>{
    var url = 'https://api.github.com/users/';
    url = url + username;
    const userDataResponce = await Axios.get(url);
    if(userDataResponce.status===200){
        const userRepoResponce = await Axios.get(userDataResponce.data.repos_url);
        return {
            user:userDataResponce.data,
            repos:userRepoResponce.data
        }
    }
}