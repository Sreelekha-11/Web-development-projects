const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");
const users = userList.getElementsByTagName("li");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    let found = false;

    for (let i = 0; i < users.length; i++) {
        const userName = users[i].textContent.toLowerCase();

        if (userName.includes(searchValue)) {
            users[i].style.display = "list-item";
            found = true;
        } else {
            users[i].style.display = "none";
        }
    }

    if (found || searchValue === "") {
        noResult.style.display = "none";
    } else {
        noResult.style.display = "block";
    }
});
