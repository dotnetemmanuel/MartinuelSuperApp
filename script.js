var todoListElement = document.getElementById("todoList");

const list = [];

let item = {
    description,
    isDone,
};

function showList() {
    todoListElement.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const listItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteItem(i);
        });

        editBtn.textContent = "Done";
        editBtn.addEventListener("click", () => {
            markAsDone(i);
        });

        listItem.textContent = list[i].description;

        if (list[i].isDone) {
            listItem.style.textDecoration = "line-through";
        }

        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        todoListElement.appendChild(listItem);
    }
}

function addToList() {
    const textAreaValue = document.getElementById("textArea").value;
    const alertDiv = document.getElementById("alert");

    if (textAreaValue === "") {
        alertDiv.style.display = "block";
    } else {
        alertDiv.style.display = "none";
        const item = {
            isDone: false,
            description: textAreaValue,
        };

        list.push(item);

        showList();
        document.getElementById("textArea").value = "";
    }
}

function deleteItem(index) {
    list.splice(index, 1);

    showList();
}

function markAsDone(index) {
    const selectedItem = list[index];
    selectedItem.isDone = true;

    showList();
}
