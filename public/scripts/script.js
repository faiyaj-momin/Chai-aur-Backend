const blogCards = document.querySelectorAll(".blog-card");
const blogContainer = document.getElementById("main-content");
const blogCardsArray = Array.from(blogCards);

console.log(blogCardsArray[0]);

const createBlog = (title, desc, img)=> {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
    <div class="img-container">
        <img src="${img}" />
      </div>
        <div class="blog-show">
        <div class="title"><h2>${title}</h2></div>
        <div class="caption"><p>${desc}</p></div>
        </div>
    `;
    return blogCard;
};

for (let i = 0; i < 10; i++) {
   blogContainer.appendChild(createBlog("Title", "Description", "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"));
}


const createpost = document.querySelector(".create-post");
console.log(createpost);

