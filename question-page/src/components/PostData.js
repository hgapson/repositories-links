export function PostData(type, userDAta){
    let BaseUrl='https://api.thewallscript.com/restful';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl+type,{
            method:'POST',
            body: JSON.stringify(userDAta)
        })
        .then((response)=> response.json())
        .then((responseJson)=> {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        })
    })
    
}