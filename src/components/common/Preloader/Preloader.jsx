import classes from "../../Users/Users.module.css";
import loading from "../../../assets/images/loading.gif";
import React from "react";

let Preloader = (props) => {
    return (
    <div className={classes.item}>
       <img src={loading}/>
    </div>
    )
}
export default Preloader;