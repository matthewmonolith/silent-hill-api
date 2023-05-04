const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let games = {
    'silent hill': {
        'title':'Silent Hill',
        'release date': 'Feb 23, 1999',
        'platform(s)': 'PlayStation'
    },
    'silent hill 2':{
        'title':'Silent Hill 2',
        'release date': 'Sept 25, 2001',
        'platform(s)': ['PlayStaton 2', 'Xbox', 'PC']
    },
    'silent hill 3':{
            'title':'Silent Hill 3',
            'release date': ' May 23, 2003',
            'platform(s)': ['PlayStaton 2', 'PC']
    },
    'unknown':{
        'title':'unknown',
        'release date': ' unknown',
        'platform(s)': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const gameName = request.params.name.toLowerCase()
    if(games[gameName]){
        response.json(games[gameName])
    }else{
        response.json(games['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})