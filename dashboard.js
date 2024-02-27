function submission(){

    let displayline = document.getElementById("displayline");
    displayline.textContent = "Poems Published"

}

function displayname(){

    let name = localStorage.getItem("displayname")

    let box = document.getElementById("username")
    
    box.textContent = name;

}

function displayemail(){

    let email = localStorage.getItem("displayemail")

    let box2 = document.getElementById("email")

    box2.textContent = email


}



function submitPoem() {
    const poemData = {
        title: document.getElementById('poemTitle').value,
        author: document.getElementById('poemAuthor').value,
        content: document.getElementById('poemContent').value
    };

    
    let poems = JSON.parse(localStorage.getItem('poems')) || [];

    
    poems.push(poemData);

    
    localStorage.setItem('poems', JSON.stringify(poems));

    document.getElementById('poemTitle').value = '';
    document.getElementById('poemAuthor').value = '';
    document.getElementById('poemContent').value = '';
    
    
    
    displayPoems();
}


function displayPoems() {
    displayname();
    displayemail();
    const poems = JSON.parse(localStorage.getItem('poems')) || [];
    const poemsContainer = document.getElementById('poemsContainer');
    poemsContainer.innerHTML = '';

   
    poems.forEach(poem => {
        const poemElement = document.createElement('div');
        poemElement.classList.add('poem-card');
        poemElement.innerHTML = `
            <h2>${poem.title}</h2>
            <p><strong>Author:</strong> ${poem.author}</p>
            <p>${poem.content}</p>
        `;
        poemsContainer.appendChild(poemElement);
    });
}


window.onload = displayPoems;