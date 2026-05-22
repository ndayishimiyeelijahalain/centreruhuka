function getPosts(){
  return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

function savePosts(posts){
  localStorage.setItem("blogPosts", JSON.stringify(posts));
}

function addPost(){

  const posts = getPosts();

  const post = {
    id: Date.now(),

    published: true,

    date: new Date().toISOString(),

    image: document.getElementById("image").value,

    title:{
      fr: document.getElementById("titleFr").value,
      en: document.getElementById("titleEn").value,
      sw: document.getElementById("titleSw").value,
      rn: document.getElementById("titleRn").value
    },

    text:{
      fr: document.getElementById("textFr").value,
      en: document.getElementById("textEn").value,
      sw: document.getElementById("textSw").value,
      rn: document.getElementById("textRn").value
    }
  };

  posts.push({
  id: Date.now(),

  published: true,

  date: new Date().toISOString().split("T")[0],

  image: imageInput.value,

  title:{
    fr:titleFr.value,
    en:titleEn.value,
    sw:titleSw.value,
    rn:titleRn.value
  },

  text:{
    fr:textFr.value,
    en:textEn.value,
    sw:textSw.value,
    rn:textRn.value
  }
});

  savePosts(posts);

  renderPosts();

  alert("Article ajouté ✅");
}

function deletePost(id){

  let posts = getPosts();

  posts = posts.filter(p => p.id !== id);

  savePosts(posts);

  renderPosts();
}

function togglePublish(id){

  let posts = getPosts();

  posts = posts.map(post => {

    if(post.id === id){
      post.published = !post.published;
    }

    return post;
  });

  savePosts(posts);

  renderPosts();
}

function renderPosts(){

  const posts = getPosts();

  const container = document.getElementById("posts");

  container.innerHTML = "";

  posts.reverse().forEach(post => {

    container.innerHTML += `
      <div class="blog-item">

        <img src="${post.image}">

        <h2>${post.title.fr}</h2>

        <p>${post.text.fr}</p>

        <small>${post.date}</small>

        <br><br>

        <button onclick="togglePublish(${post.id})">
          ${post.published ? "Dépublier" : "Publier"}
        </button>

        <button onclick="deletePost(${post.id})">
          Supprimer
        </button>

      </div>
    `;
  });
}

renderPosts();