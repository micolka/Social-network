import {createSelector} from "reselect";

export const pageSizeSelector = (state) => {
    return state.usersData.pageSize;
}

export const totalUsersCountSelector = (state) => {
    return state.usersData.totalUsersCount;
}

export const currentPageSelector = (state) => {
    return state.usersData.currentPage;
}

export const isFetchingSelector = (state) => {
    return state.usersData.isFetching;
}

export const followingQueie = (state) => {
    return state.usersData.followingQueie;
}


// Пример работы с библиотекой reselect
// Вспомогательный, примитивный селектор
const getUsersInnerSel = (state) => {
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

