// instagram API call
fetch("").then((res)=>{
    res = res.json().then((data)=>{
        console.log(data)
    })
})
