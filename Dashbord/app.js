let isLoggedInUser = JSON.parse(localStorage.getItem("lOGINUSER")) || [];
console.log("", isLoggedInUser);

document.addEventListener("DOMContentLoaded", function () {
  if (isLoggedInUser) {
    displayUserInfo(isLoggedInUser);
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    displayPosts(posts);
  } else {
    console.log(isLoggedInUser)
    window.location.href = "../index.html";
  }
});

function displayUserInfo(user) {
  document.getElementById("userName").textContent = user.iFirstName + ' ' + user.iSurnameName;
  document.getElementById("emailAddress").textContent = user.email;
  document.getElementById("mobNum").textContent = user.mobilenumsignup;
  document.getElementById("gender").textContent = user.gender;
  document.getElementById("description").textContent = user.description || "No Description Added";
}

function postHandler() {
  const postInput = document.getElementById("postInputBox");
  const postContent = postInput.value;

  if (postContent.trim() !== "") {
    const post = {
      id: Date.now(),
      content: postContent,
      email: isLoggedInUser.mobilenumsignup,
      userNameu: isLoggedInUser.iFirstName + " " + isLoggedInUser.iSurnameName,
description: isLoggedInUser.description,
date: new Date().getDate()
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts(posts);

    postInput.value = "";
  }
}

function displayPosts(posts) {
  const postArea = document.getElementById("postAreaId");
  postArea.innerHTML = "";

  for (let post of posts) {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <div class="postContent">
        <p>${post.content}</p>
      </div>
    `;

    postArea.prepend(div);
  }
}

function logout() {
  localStorage.removeItem("LOGINUSER");
  window.location.href = "../index.html";
}

function navbarScrollingDropdown(){
    var dropdownItems = document.querySelectorAll('.dropdown-item');
    var dropdownkeclickperanewalelist = document.querySelectorAll('.dropdownkeclickperanewalelist');

    dropdownItems.forEach(function (item) {
        item.classList.toggle("none");
    });
    dropdownkeclickperanewalelist.forEach(function (item) {
        item.classList.toggle('removeborderandbackground');
    
})
}