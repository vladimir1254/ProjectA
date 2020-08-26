import React, {useState} from "react";
import classes from "./Paginator.module.css"
const Paginator = ({totalCount,pageSize,currentPage,onPagech,portionSize=10}) =>
{
    let pagesCount = Math.ceil(totalCount /pageSize);
    let pages = [];
    for(let i=1;i<=pagesCount;i++)
    {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumberCurrent,setPortionNumber] = useState(1)
    let leftPortionNumber =(portionNumberCurrent-1)*portionSize +1
    let rightPortionNumber = portionNumberCurrent*portionSize

    return <div className={classes.item}>
        {portionNumberCurrent>1 &&
        <button onClick={()=>{setPortionNumber(portionNumberCurrent-1)}}>PREV</button>}

                {pages.filter( p => leftPortionNumber<=p && p<=rightPortionNumber)
                    .map( (p) =>
                    {return <span className={p===currentPage ? `${classes.page} ${classes.activity}`:
                    classes.page}
                                  key = {p}
                                      onClick={(e) => {onPagech(p) }}>
                        {p}</span>})}
        {portionNumberCurrent<portionCount &&
        <button onClick={()=>{setPortionNumber(portionNumberCurrent+1)}}>NEXT</button>}

    </div>
}
export default Paginator;
