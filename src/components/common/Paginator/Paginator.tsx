import React from "react";
import styles from './paginator.module.css';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = (props) => {

    // Расчет количества страниц в селекторе
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let itemsCount = 9;
    let middle = Math.round(itemsCount / 2);

    if (itemsCount > pagesCount) {
        itemsCount = pagesCount;
        middle = pagesCount;
    }

    if (props.currentPage <= middle) {
        for (let i = 1; i <= itemsCount; i++) {
            pages.push(i);
        }
    }
    else if (props.currentPage >= pagesCount - middle) {
        for (let i = pagesCount - itemsCount; i <= pagesCount; i++) {
            pages.push(i);
        }
    }
    else {
        for (let i = 1 + (props.currentPage - middle); i <= itemsCount + (props.currentPage - middle); i++) {
            pages.push(i);
        }
    }

    return <div className={styles.selector}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.restPages}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>;
            })}
        </div>
};

export default Paginator;