const people = [
    { name: "Jane", pic: "images/patrick.png", score: 300 },
    { name: "Brenda", pic: "images/spongebob.png", score: 10} ,
    { name: "Wanda", pic: "images/spongebob.png", score: 60 },
    { name: "Maria", pic: "images/patrick.png", score: 80 },
    { name: "Jasper", pic: "images/spongebob.png", score: 600 },
    { name: "Malik", pic: "images/patrick.png", score: 40 }
];

// currently, this program adds a single card to the DOM, where the
// image, name, and score are hard-coded.
// 
// Your job: Use a "for...of" loop to render a unique card for each person 
//           in the list above. You will replace the image url, name, and 
//           points with a template variable.


for(let i = 0; i<people.length; i++) {
    let template = `
        <div class="card">
            <div>
                <img src="${people[i].pic}">
                <p>${people[i].name} scored ${people[i].score} points</p>
            </div>
        </div>
    `;
    document.querySelector(".players").insertAdjacentHTML('beforeend', template);
}

