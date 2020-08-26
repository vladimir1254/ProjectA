export const updtateObjectinArray = (items,itemid,itemprops,newpropobj) => {
  return items.map(u => {
        if(u[itemprops] === itemid)
            return{...u,...newpropobj}
        return u
    })
}