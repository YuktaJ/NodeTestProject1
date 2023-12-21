async function refresh() {
    let res = await axios.get('http://localhost:3000/books')
    for (let i = 0; i < res.data.books.length; i++) {
        AddToScreen(res.data.books[i]);
    }
}
refresh();

function BookIssued(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let fine = 0;

    let CurrDate = new Date();
    let issueDate = CurrDate.toISOString();

    CurrDate.setHours(CurrDate.getHours() + 1);
    let returnDate = CurrDate.toISOString();
    let returnBook = document.getElementById("returnBook").value;

    let obj = {
        title, issueDate, returnDate, returnBook, fine
    }

    AddToStorage(obj);
}

async function AddToStorage(obj) {
    try {
        let result = await axios.post("http://localhost:3000/books", obj);
        AddToScreen(result.data.book)

    } catch (error) {
        console.log(error);
    }
}

function calculateHourDifference(issueDate, returnDate) {
    const date1 = new Date(issueDate);
    const date2 = new Date(returnDate);
    console.log(date1, date2)
    // Calculate the difference in milliseconds
    const differenceMs = date2 - date1;

    // Convert milliseconds to hours
    const differenceHours = differenceMs / (1000 * 60 * 60);

    console.log(differenceHours);
}

function AddToScreen(obj) {
    let parent1 = document.getElementById("parent1");
    let parent2 = document.getElementById("parent2");

    let currentDate = new Date().toISOString();

    let childEle = document.createElement('li');
    childEle.textContent = `${obj.title}  ${obj.issueDate}  ${obj.returnDate}  ${obj.fine}`;

    let returnButton = document.createElement("input");
    returnButton.value = "Return Book";
    returnButton.type = "button";

    if (obj.returnBook === 'incomplete') {
        parent1.appendChild(childEle);
        childEle.append(returnButton);
    }else{
        let childEle2 = document.createElement('li');
        childEle2.textContent = `${obj.title} ${obj.fine}`;
        
    }
    returnButton.onclick = () => {
        calculateHourDifference(obj.issueDate, currentDate);
    }
}

