import React, {useEffect, useState} from "react";

const ProfileWithHoocks = (props) =>
{
    let [editMode,editModeFunc] = useState(false)
    let [status,setStatus] = useState(props.status)
    useEffect( () =>
    {
        setStatus(props.status)
    },[props.status])
    const activateMode = () =>
    {
        editModeFunc(true)
    }
    const deactivateMode = () =>
    {
        editModeFunc(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>
    {
        setStatus(e.currentTarget.value)
    }
    return (<div>
            {!editMode || !props.isOwner ?
            <div>
              <b>Status:</b>  <span onClick = {activateMode} > {status || 'No status'} </span>
            </div> : null
            }
            {editMode && props.isOwner &&
            <div>
               <b>Status:</b> <input onBlur={deactivateMode}  autoFocus={true} value={status}
                       onChange={onStatusChange}
                />
            </div>
            }
        </div>)
}
export default ProfileWithHoocks