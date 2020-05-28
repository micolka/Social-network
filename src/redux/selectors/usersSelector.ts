import { AppStateType } from './../reduxStore';
import {createSelector} from "reselect";

export const pageSizeSelector = (state: AppStateType) => {
    return state.usersData.pageSize;
}

export const totalUsersCountSelector = (state: AppStateType) => {
    return state.usersData.totalUsersCount;
}

export const currentPageSelector = (state: AppStateType) => {
    return state.usersData.filterProps.currentPage;
}

export const isFetchingSelector = (state: AppStateType) => {
    return state.usersData.isFetching;
}

export const followingQueie = (state: AppStateType) => {
    return state.usersData.followingQueie;
}


// Пример работы с библиотекой reselect
// Вспомогательный, примитивный селектор
const getUsersInnerSel = (state: AppStateType) => {
    return state.usersData.users;
}

/*export const usersSelector = (state) => {
                                        //имитация фейковой логики, нагружающей приложение
    return getUsersInnerSel(state).filter(u => true);
}*/

// создаем селектор с использованием createSelector
export const usersSuperSelector = createSelector(getUsersInnerSel, (users) => {
    return users.filter(u => true);
})

