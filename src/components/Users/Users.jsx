import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
let Users = (props) =>
{
        return (<div>
                <Paginator totalCount ={props.totalCount} pageSize = {props.pageSize}
                currentPage = {props.currentPage} onPagech = {props.onPagech}
                />
                <div>
            {
                 props.users.map(u => <User user={u} key={u.id} unfollowThunkCreator={props.unfollowThunkCreator}
                 isfollow={props.isfollow} followThunkCreator={props.followThunkCreator}/>
                 )
            }
                </div>
        </div>
    )

}
export default Users;
