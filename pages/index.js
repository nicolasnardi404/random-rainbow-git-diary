let videoArt = document.getElementById("video-art")
let randomVideo = document.getElementById("random-video")
let title = document.getElementById("title")
let description = document.getElementById("description")

let videoDB= [
    {
        artist: "nadi nicoco",
        title: "meta mental",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7ANS9e6f_wU?si=-TaUsH_33Krcpwr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        description: "Meta Mental is an anti-influencer tutorial on how to make a movie. A meta journey into the process of creating and editing the many voices inside the artist's head. The experimental mocumentary is an overlay of the many personalities that can exist within one body. A film made by one person in which awkwardness is embedded in the relationship between the artist and their own creation. Dealing with loneliness and the insecurity of just existing as a creative mind full of delusions.",
        email: "nico.nardi@hotmail.com", 
        socialMedia: "https://www.instagram.com/nadinicoco/"
    },
    {
        artist: "nadi nicoco",
        title: "copy machine",
        video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/bJNnFoWMbGg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
        description: "video art for soundtrack from esquizo ciborgue EP by nadi nicoco",
        email: "nico.nardi@hotmail.com", 
        socialMedia: "https://www.instagram.com/nadinicoco/"
    },
    {
        artist: "nadi nicoco",
        title: "mãe",
        video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/sKXHZ9bM9Oo' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
        description: "video art nadi nicoco",
        email: "nico.nardi@hotmail.com", 
        socialMedia: "https://www.instagram.com/nadinicoco/"
    }
]
function chooseVideo(){
    let randomNumber = Math.floor(Math.random() * videoDB.length)
    let videoScreening = videoDB[randomNumber]
    videoArt.innerHTML = videoScreening.video
    title.textContent = videoScreening.title
    description.textContent = videoScreening.description
}

randomVideo.addEventListener("click", function(){
    chooseVideo()
 })

chooseVideo()
