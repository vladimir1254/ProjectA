import {createSelector} from "reselect";

export const getUsers = (state) =>
{
    return state.userPages.users;
}
export const getisFetching = (state) =>
{
    return state.userPages.isfetching;
}
export const getUsersSuper = createSelector( getUsers,getisFetching, (users,isfetch) =>
    {
       return users.filter(u=>true);
    })
export const getPageSize = (state) =>
{
    return state.userPages.pageSize;
}
export const gettotalCount = (state) =>
{
    return state.userPages.totalCount;
}
export const getcurrentPage = (state) =>
{
    return state.userPages.currentPage;
}
export const getisfollowing = (state) =>
{
    return state.userPages.followingInProgress;
}