async function AsyncGet(api, param={}, noBase=true){
    console.log(api)
    let url = noBase ? api : BASE_URL + api
    
    url = url + constParam(param)
    

    let data = await fetch(url)

    return data
}

function constParam(obj){
    let res = ""
    let i = 0
    let len = Object.keys(obj).length

    if(len == 0) return ""

    for(let key in obj){
        if(i == 0){
            res += "?" + key + "=" + obj[key]
        }
        
        else {
            res += "&" + key + "=" + obj[key]
        }

        i++
    }

    return res
}