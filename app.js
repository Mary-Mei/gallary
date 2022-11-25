function getPicture() {
    const picture = {
        id: 3,
        url: './picture/3',
        description: '3/10',
        comments: [
            {
                id: 3,
                message: 'top',
                user: {
                    avatar: './picture/3.avatar',
                    name: 'user333',
                }
            }
        ]
    };

    return picture;
}

function getPictures() {
    getPicture()
}

console.log(getPictures(6)) 