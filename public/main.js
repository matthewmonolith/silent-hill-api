document.getElementById('submit').addEventListener('click', getData);

function getData(){
    event.preventDefault()
    const userInput = document.getElementById('name').value
    const url = 'http://localhost:8000/api/'+userInput

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let prop in data){
            const item = document.createElement('li');
            item.textContent = data[prop]
            const list = document.getElementById('result-json')
            list.appendChild(item)
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}