function dealtime(num){
    return num>10? num+'':'0'+num
}

function getTime() {
    let now = new Date()
    let h = now.getHours(),m=now.getMinutes(),s=now.getSeconds()
    let text=h>12? '下午':'上午'
    let result=text+h+':'+m+':'+s+' '
    h=dealtime(h)
    m=dealtime(m)
    s+dealtime(s)
    document.getElementById('getTime').innerText = result
    setTimeout(getTime, 100)
}

window.addEventListener('load',getTime)

function dealTime(num){
    return num>10? num+'':'0'+num
}