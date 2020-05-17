import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {


    // Пример использования hook / хуков
    // Локальный стейт для сосхранения временного статуса и функции для его изменения
    let [localStatus, setlocalStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    // Синхронизация статуса после изменения пропсов
    useEffect( () => {
        setlocalStatus(props.status);
    },[props.status]);

    // Активатор изменения статуса Юзера
    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(localStatus);
    }

    // Метод обрабатывает изменение статуса. Отправляет инфу на сервак.
    const onStatusChange = (e) => {
            setlocalStatus(e.currentTarget.value);
    }

    return <>
        { !editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
        </div>
        }
        { editMode &&
        <div>
            <input autoFocus={true} onBlur={deActivateEditMode}
                   value={localStatus} onChange={onStatusChange}/>
        </div>
        }
    </>

};

export default ProfileStatusWithHooks;