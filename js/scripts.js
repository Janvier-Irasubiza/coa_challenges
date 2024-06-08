function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function showModal(data) {
    var modal = document.getElementById("details");
    var title = document.getElementById("title");
    var locationElement = document.getElementById("location");
    var descriptionElement = document.getElementById("description");
    var img = document.getElementById("img");
    var downloadUrl = document.getElementById("download");

    title.innerText = data.title;
    locationElement.innerText = data.location;
    descriptionElement.innerText = data.description;
    img.src = data.img;
    downloadUrl.href = data.img; 
    modal.style.display = "block";

    var slugifiedTitle = slugify(data.title);
    var url = window.location.origin + '/' + slugifiedTitle;
    window.history.replaceState({}, '', url);
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var container = document.querySelector(".container");
        data.forEach((item, index) => {
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="card-content">
                    <h2>${item.title}</h2>
                    <p class="location">${item.location}</p>
                    <a href="#" class="more-info">Know more <i class="fa-solid fa-arrow-right font"></i></a>
                </div>`;
            container.appendChild(card);
            card.addEventListener("click", function(event) {
                showModal(item);
            });
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

var closeButton = document.querySelector(".close");
closeButton.addEventListener("click", hideModal);

window.addEventListener("click", function(event) {
    var modal = document.getElementById("details");
    if (event.target === modal) {
        hideModal();
    }
});

function hideModal() {
    var modal = document.getElementById("details");
    modal.style.display = "none";

    var url = window.location.origin;
    window.history.replaceState({}, '', url);
}
