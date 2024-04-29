
let vangogh = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === 'Show Van Gogh Paintings');
let others = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === 'Show Other Paintings');

vangogh.addEventListener('click', function(){
    fetch('data/vangogh.json')
    .then(response => response.json())
    .then(data =>{
        addPaintings(data);
    })
    .catch(error =>{
        console.log('Error:', error)
    });
});

others.addEventListener('click', function(){
    fetch('data/other.json')
    .then(response => response.json())
    .then(data =>{
        addPaintings(data);
    })
    .catch(error =>{
        console.log('Error:', error)
    });
});

function addPaintings(paintings){

    let paintingCont= document.querySelector('.paintings_cont');
    paintingCont.innerHTML = '';

    paintings.forEach(painting =>{
        let paintingDiv = document.createElement('div');
        paintingCont.appendChild(paintingDiv);
        paintingDiv.classList.add('painting');

        let paintingTitle = document.createElement('h3');
        paintingTitle.textContent = painting.title;
        paintingDiv.appendChild(paintingTitle);

        let paintingImg = document.createElement('img');
        paintingImg.src = painting.primaryImage;
        paintingImg.alt = painting.title;
        paintingDiv.appendChild(paintingImg);

        let paintingArtist = document.createElement('p');
        paintingArtist.textContent = painting.artist;
        paintingDiv.appendChild(paintingArtist);

        paintingCont.appendChild(paintingDiv);
    });
}