const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.querySelector(".posts-container")

posts.forEach((p)=>{
    postsContainer.innerHTML+= `
    <section class="posts">
        <img class="pic" src="${p.avatar}">
        <h1>${p.name}<span class="place">${p.location}</span></h1>
        <img class="post" src="${p.post}">
        <img class="like" src="images/icon-heart.png">
        <img class="comment" src="images/icon-comment.png">
        <img class="share" src="images/icon-dm.png">
        <h2 class="like-count">${p.likes} likes</h2>
        <h2 class="username">${p.username} <span class="comm"> ${p.comment}</span></h2>
    </section>`
})

const likeIncrease = document.querySelectorAll(".post")
const postEl = document.querySelectorAll(".like-count")
const liked = document.querySelectorAll(".like")

likeIncrease.forEach((img,index) => {
    img.addEventListener("dblclick", function(){
        
        if(!liked[index].classList.contains("liked")){
            posts[index].likes++
            liked[index].classList.add("liked")
        }
        postEl[index].textContent = `${posts[index].likes} likes`
    })
    
})