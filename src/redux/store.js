import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store =
     {
         _calls() {
             console.log('qqq')
         },
         subscribe(observer) {
             this._calls = observer
         },
         _state: {
             profilePages:
                 {
                     posts: [{id: 1, message: 'Hi, how are you?', likecount: '20'},
                         {id: 2, message: 'It\'s First post', likecount: '10'},
                         {id: 3, message: 'It\'s First post', likecount: '10'},
                         {id: 4, message: 'It\'s First post', likecount: '10'},],
                     postMessage: '',
                 },
             dialogsPages:
                 {
                     curText: '',
                     curMessage:'',
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

                 },
             sidebar:
                 {
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
                 },
         },

         getState() {
             return this._state;
         },
         dispatch(action) {
             this._state.profilePages=profileReducer(this._state.profilePages,action)
                 this._state.dialogsPages=dialogsReducer(this._state.dialogsPages,action)
             this._state.sidebar=sidebarReducer(this._state.sidebar,action)
             this._calls(this._state);
         }
     }

export default store;