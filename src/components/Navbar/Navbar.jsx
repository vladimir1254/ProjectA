import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

 const Mes = (props) =>
 {
     return (
         <span>
                 <img src={props.ava}/>
         </span>
    )
 }
const Nam = (props) =>
{
    return (
        <span className={classes.nam}>
            {props.name}
         </span>
    )
}


const Navbar = ({users}) =>
{
      let side = users.map(m =><Mes key={m.id}  ava={m.ava} name={m.name}/>)
     let name = users.map(m=><Nam key={m.id} name ={m.name}/>)
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
               <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
           </div>
            <div className={classes.item}>
               <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
                    <div className={classes.photo}>
                        {side}
                    </div>
                        <div className={classes.nam}>
                        {name}
                        </div>
                </div>
        </nav>
    )
}
export default Navbar;