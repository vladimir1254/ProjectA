
let initialSidebar =   {
    friends: [
        {id:1,name: 'Dima', ava: 'https://html5css.ru/howto/img_avatar.png'},
        {
            id:2,
            name: 'Vanjya',
            ava: 'https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru'
        },
        {
            id:3,
            name: 'Petya',
            ava: 'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'
        },
    ]
}

const sidebarReducer = (state=initialSidebar,action) =>
{
    return state;
}
export default sidebarReducer;