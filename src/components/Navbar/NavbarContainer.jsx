import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

const NavbarContainer = (props) =>
{
    return <Navbar users={props.users}/>
}
let mapStateToProps = (state) => {
    return {
       users:state.sidebar.friends
    }
}
export default connect(mapStateToProps,{})(NavbarContainer);