const express = require('express')
const app = express()
const cors = require('cors') //cross origin, if you deploy the html to facebook, by default that wouldn't be able to access the api in the normal api, checks origin first and api origin, they're not the same, it doesn't match the origin, for security reasons it doesn't fetch it
const PORT = 8000

app.use(cors())

let games = {
    'silent hill': {
        'title':'Silent Hill',
        'release date': 'February 23, 1999',
        'platform(s)': ['PlayStation'],
        'director(s)': 'Keiichiro Toyama',
        'developer(s)': 'Team Silent'
    },
    'silent hill 2':{
        'title':'Silent Hill 2',
        'release date': 'September 25, 2001',
        'platform(s)': ['PlayStation 2', 'Xbox', 'PC'],
        'director(s)': 'Masashi Tsuboyama',
        'developer(s)': 'Team Silent'
    },
    'silent hill 3':{
        'title':'Silent Hill 3',
        'release date': ' May 23, 2003',
        'platform(s)': ['PlayStation 2', 'PC'],
        'director(s)': 'Kazuhide Nakazawa',
        'developer(s)': 'Team Silent'
    },
    'silent hill 4':{
        'title':'Silent Hill 4: The Room',
        'release date': 'June 17, 2004',
        'platform(s)': ['PlayStation 2', 'Xbox','PC'],
        'director(s)': 'Suguru Murakoshi',
        'developer(s)': 'Team Silent'
    },
    'silent hill: origins':{
        'title':'Silent Hill: Origins',
        'release date': 'November 6, 2007',
        'platform(s)': ['PlayStation Portable','Playstation 2'],
        'director(s)': 'Mark Simmons',
        'developer(s)': 'Climax Action'
    },
    'silent hill: homecoming':{
        'title':'Silent Hill: Homecoming',
        'release date': 'September 30, 2008',
        'platform(s)': ['PlayStation 3', 'Xbox 360','PC'],
        'director(s)': 'Cordy Rierson',
        'developer(s)': 'Double Helix Games'
    },
    'silent hill: downpour':{
        'title':'Silent Hill: Downpour',
        'release date': 'March 13, 2012',
        'platform(s)': ['PlayStation 3', 'Xbox 360'],
        'director(s)': 'Manny Ayala',
        'developer(s)': 'Vatra Games'
    },
    'silent hill hd':{
        'title':'Silent Hill HD Collection',
        'release date': 'March 20, 2012',
        'platform(s)': ['PlayStation 3', 'Xbox 360'],
        'director(s)': 'None',
        'developer(s)': 'Hijinx Studios'
    },
    'silent hill: shattered memories':{
        'title':'Silent Hill: Shattered Memories',
        'release date': 'December 8, 2009',
        'platform(s)': ['Wii','PlayStation 2','PlayStation Portable'],
        'director(s)': 'Mark Simmons',
        'developer(s)': 'Climax Studios'
    },
    'silent hill: book of memories':{
        'title':'Silent Hill: Book Of Memories',
        'release date': 'October 16, 2012',
        'platform(s)': ['PlayStation Vita'],
        'director(s)': 'Adam Tierney',
        'developer(s)': 'WayForward Technologies'
    },
    'pt':{
        'title':'P.T.(playable teaser)',
        'release date': 'August 12, 2014',
        'platform(s)': ['PlayStation Four'],
        'director(s)': ['Hideo Kojima','Guillermo Del Toro'],
        'developer(s)': 'Konami Productions'
    },
    'silent hill 2 remake':{
        'title':'Silent Hill 2 remake',
        'release date': 'TBA',
        'platform(s)': ['PlayStation Five','PC'],
        'director(s)': 'Mateusz Lenart',
        'developer(s)': 'Bloober Team'
    },
    'silent hill f':{
        'title':'Silent Hill f',
        'release date': 'TBA',
        'platform(s)': 'TBA',
        'director(s)': 'Al Yang',
        'developer(s)': 'NeoBards Entertainment'
    },
    'unknown':{
        'title':'unknown',
        'release date': 'unknown',
        'platform(s)': 'unknown',
        'director(s)': 'unknown'
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