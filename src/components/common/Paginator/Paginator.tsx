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
    if (props.currentPage <= 5) {
        for (let i = 1; i <= 9; i++) {
            pages.push(i);
        }
    }
    else if (props.currentPage >= pagesCount - 5) {
        for (let i = pagesCount - 9; i <= pagesCount; i++) {
            pages.push(i);
        }
    }
    else {
        for (let i = 1 + (props.currentPage - 5); i <= 9 + (props.currentPage - 5); i++) {
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