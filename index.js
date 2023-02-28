let url = "https://kontests.net/api/v1/all"
let page;
let str = "";
let res;


let contents = async () => {
    let content = await fetch(url)
    res = await content.json()
}

let setContent = (item) => {
    str += `
            <div class="card m-2" style="width: 15rem;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text my-0">${item.site}</p>
                    <p class="card-text my-0">From: ${new Date(item.start_time).toLocaleDateString()} to ${new Date(item.end_time).toLocaleDateString()}</p>
                    <p class="card-text my-0">Status: ${item.status}</p>
                    <p class="card-text my-0">in_24_Hours: ${item.in_24_hours}</p>
                    <a href="${item.url}" target=_blank class="btn btn-primary mt-2">Go</a>
                </div>
            </div>`
}
const data = async () => {
    str = ""
    await contents()
    for (let item of res) {
        setContent(item)
    }
    document.getElementById("content").innerHTML = str
}

let filered = (query) => {
    str = ""
    document.getElementById("content").innerHTML = str
    for (let item of res) {
        if (item.site == query) {
            setContent(item)
        }
    }
    document.getElementById("content").innerHTML = str
}

document.getElementById("btn").onclick = () => {
    let query = search.value
    filered(query)
    search.value = ""
}

all.onclick = () => {
    data()
}


hackerrank.onclick = () => {
    let query = hackerrank.innerText
    filered(query)
}
hackerearth.onclick = () => {
    let query = hackerearth.innerText
    filered(query)
}
atcoder.onclick = () => {
    let query = atcoder.innerText
    filered(query)
}
leetcode.onclick = () => {
    let query = leetcode.innerText
    filered(query)
}
codeforces.onclick = () => {
    let query = codeforces.innerText
    filered(query)
}

data()
