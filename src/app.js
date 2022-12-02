function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComment() {
    return {
        id: 3,
        message: 'top',
        user: {
            avatar: './picture/3.avatar',
            name: 'user333',
        }
    }
}

const maxComments = 15;

function getPicture() {
    const comments = [];

    let i = 1;
    let randomComments = getRandomInt(1, maxComments) 

    while (i <= randomComments) {
        comments.push(getComment());
        i++;
    }

    const picture = {
        id: 3,
        url: './photos/1.jpg',
        description: '3/10',
        comments: comments
    };

    return picture;
}

function getPictures(num) {
    const pictures = [];
    let i = 1;
    
    while (i <= num) {
        pictures.push(getPicture(num));    
        i++;
    }

    return pictures;
}

const picturesListElement = document.querySelector('.pictures-list');
const pictureTempLateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');


const renderPicturesList = (pictures) => {
    for(const picture of pictures) {
        const pictureElement = pictureTempLateElement.cloneNode(true);

        pictureElement.querySelector('img').src = picture.url;
        pictureElement.querySelector('.card-title').textContent = picture.description;

        picturesListElement.append(pictureElement);
    }
}

// console.log(getPictures(6));

renderPicturesList(getPictures(66));