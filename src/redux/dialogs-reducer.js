const A_MESSAGE='A-MESSAGE'

let initialDialog = {
    dialogsData: [{
    id: 1,
    name: 'Dima',
    ava: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg',
    curText: ''
},
    {
        id: 2,
        name: 'Kasha',
        ava: 'https://ho8ssabqvb.a.trbcdn.net/wp-content/uploads/2020/12/avatarka.jpg',
        curText: ''
    },
    {id: 3, name: 'Dddd', ava: 'https://ava-24.com/_ph/98/563228947.jpg', curText: ''},
    {id: 4, name: 'KKK', ava: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg', curText: ''},
    {
        id: 5,
        name: 'ZZZ',
        ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU',
        curText: ''
    },],
    messagesData: [{
    id: 1,
    message: 'QQQQ',
    ava: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg'
},
    {
        id: 2,
        message: 'tytyty',
        ava: 'https://ho8ssabqvb.a.trbcdn.net/wp-content/uploads/2020/12/avatarka.jpg'
    },
    {id: 3, message: 'message', ava: 'https://ava-24.com/_ph/98/563228947.jpg'},
    {id: 4, message: 'incognito', ava: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'},
    {
        id: 5,
        message: 'daaa',
        ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU'
    },],

}

const dialogsReducer = (state=initialDialog,action) =>
{
    switch (action.type) {
        case A_MESSAGE:
        {
            let newMes =
                {
                    id: 5,
                    message: action.message,
                    ava: 'https://ava-24.com/_ph/98/563228947.jpg',
                };
            return {
                ...state,
                messagesData:[...state.messagesData,newMes],
            }
        }
        default:
            return state;
    }
}

export let aMessageActionCreator = (message) =>
{
    return{
        type: A_MESSAGE,
        message
    }
}
export default dialogsReducer;