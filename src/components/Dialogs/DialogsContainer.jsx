import {aMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//
// const DialogsContainer = (props) =>{
//     return <MyContext.Consumer>
//             {
//                 (store)=>{
//                     let state = store.getState()
//                     let onChangetext = (text) =>
//                     {
//                         store.dispatch(chMessageActionCreator(text))
//                     }
//                     let onClickbut =() =>
//                     {
//                         store.dispatch(aMessageActionCreator())
//                     }
//        return <Dialogs Clickbut={onClickbut} ChangeText={onChangetext} dialogsPages = {state.dialogsPages} dispatch={store.dispatch}/>
//             }
//         }
//         </MyContext.Consumer>
// }


let mapStateToProps = (state) => {
    return{
        dialogsPages: state.dialogsPages,

    }
}
let mapDispatchToProps = (dispatch) =>
{
    return {
        Clickbut: (message)=>{
            dispatch(aMessageActionCreator(message))
        },
        // dispatch: ()=>{
        //     dispatch()
        // },
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)


//export default DialogsContainer;