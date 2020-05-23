import React, { ChangeEvent } from "react";

type PropType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type StateType ={
    editMode: boolean
    status: string
}


class ProfileStatus extends React.Component<PropType, StateType> {
    //statusInputRef = React.createRef();

    // Локальный стейт для сосхранения временного статуса
    state = {
        editMode: false,
        status: this.props.status
    }

    // Метод как стрелочная функция. Не теряется контекст при использовании ниже.
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    // Метод как медот. Чтобы не терялся контекст нужно байндить this.
    deActivateEditMode () {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    // Метод обрабатывает изменение статуса. Отправляет инфу на сервак.
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: PropType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)}
                           value={this.state.status} onChange={this.onStatusChange}/>
                </div>
            }
        </>
    }
};

export default ProfileStatus;