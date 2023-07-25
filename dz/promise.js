function fetchPostById() {
    var postIdInput = document.getElementById("postId");
    var postId = parseInt(postIdInput.value);

    if (isNaN(postId) || postId < 1 || postId > 100) {
        alert("Введіть дійсний ідентифікатор поста від 1 до 100.");
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Не вдалося знайти пост з вказаним ідентифікатором.");
            }
            return response.json();
        })
        .then(post => {
            displayPost(post);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayPost(post) {
    var postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";

    var postTitle = document.createElement("h2");
    postTitle.textContent = post.title;
    postContainer.appendChild(postTitle);

    var postBody = document.createElement("p");
    postBody.textContent = post.body;
    postContainer.appendChild(postBody);

    var commentsButton = document.createElement("button");
    commentsButton.textContent = "Отримати коментарі";
    commentsButton.onclick = function () {
        fetchComments(post.id);
    };
    postContainer.appendChild(commentsButton);
}

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            displayComments(comments);
        })
        .catch(error => {
            alert("Не вдалося отримати коментарі до поста.");
        });
}

function displayComments(comments) {
    var commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = "";

    var commentsTitle = document.createElement("h3");
    commentsTitle.textContent = "Коментарі:";
    commentsContainer.appendChild(commentsTitle);

    if (comments.length === 0) {
        var noCommentsMessage = document.createElement("p");
        noCommentsMessage.textContent = "Немає коментарів для цього поста.";
        commentsContainer.appendChild(noCommentsMessage);
    } else {
        comments.forEach(comment => {
            var commentBody = document.createElement("p");
            commentBody.textContent = comment.body;
            commentsContainer.appendChild(commentBody);
        });
    }
}