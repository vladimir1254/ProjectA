import React from "react";
import classes from "./Users.module.css"
import UserPhoto from "./../../assets/images/user.jpg"
import {NavLink} from "react-router-dom";
let User = ({user,isfollow,unfollowThunkCreator,followThunkCreator}) =>
{
    return (<div>
                    <span>
                        <div className={classes.item}>
                            <NavLink to = {'/profile/'+user.id}>
                       <img src={ user.photos.small!=null? user.photos.small : UserPhoto}/>
                            </NavLink>
                        </div>
                        <div className={classes.item}>
                            {user.followed ?  <button disabled={isfollow.some(id => id ===user.id)} onClick ={()=> {
                                    unfollowThunkCreator(user.id)
                                }
                                }>UNFOLLOW</button> :
                                <button disabled={isfollow.some( id => id === user.id)} onClick = {() => {
                                    followThunkCreator(user.id)
                                }
                                }>FOLLOW</button> }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                            {user.name}
                            </div>
                        <div>
                            Status:
                            {user.status}
                        </div>
                        </span>
                        <span>
                        <div>
                            {"user.location.country"}
                        </div>
                        <div>
                            {"user.location.city"}
                        </div>
                        </span>
                    </span>
                </div>
        )
}
export default User;
