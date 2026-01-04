const add = document.querySelector(".popup-box");
const over = document.querySelector(".popup-overlay");
const btn = document.getElementById("add-popup-button");

btn.addEventListener("click", function () {
    add.style.display = "block";
    over.style.display = "block";
});

const cnl = document.getElementById("cancelpopup");
cnl.addEventListener("click", function (event) {
    event.preventDefault();
    add.style.display = "none";
    over.style.display = "none";
});

const container = document.querySelector(".container");
const addbook = document.getElementById("addbook");
const bookname = document.getElementById("book-name");
const authorname = document.getElementById("author-name");
const des = document.getElementById("book-description");

// ✅ Default add function
function defaultAddBook(event) {
    event.preventDefault();
    const div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${bookname.value}</h2>
        <h4>${authorname.value}</h4>
        <p>${des.value}</p>
        <button type="button" class="update-btn" onclick="updatebook(event)">Update</button>
        <button type="button" onclick="deletebook(event)">Delete</button>
    `;
    container.append(div);

    // close popup
    add.style.display = "none";
    over.style.display = "none";

    // reset inputs
    bookname.value = "";
    authorname.value = "";
    des.value = "";
}

addbook.onclick = defaultAddBook;

// ✅ Delete function
function deletebook(event) {
    event.target.parentElement.remove();
}

// ✅ Update function
function updatebook(event) {
    let bookContainer = event.target.parentElement;
    let updateBtn = event.target; // the button clicked

    // get current values
    let currentName = bookContainer.querySelector("h2").innerText;
    let currentAuthor = bookContainer.querySelector("h4").innerText;
    let currentDesc = bookContainer.querySelector("p").innerText;

    // put into form
    bookname.value = currentName;
    authorname.value = currentAuthor;
    des.value = currentDesc;

    // change button text to "Save"
    updateBtn.innerText = "Save";

    // show popup
    add.style.display = "block";
    over.style.display = "block";

    // replace addbook action with update action
    addbook.onclick = function (e) {
        e.preventDefault();
        bookContainer.querySelector("h2").innerText = bookname.value;
        bookContainer.querySelector("h4").innerText = authorname.value;
        bookContainer.querySelector("p").innerText = des.value;

        // reset Update button text
        updateBtn.innerText = "Update";

        // close popup
        add.style.display = "none";
        over.style.display = "none";

        // reset inputs
        bookname.value = "";
        authorname.value = "";
        des.value = "";

        // reset add button back to default add
        addbook.onclick = defaultAddBook;
    };
}

