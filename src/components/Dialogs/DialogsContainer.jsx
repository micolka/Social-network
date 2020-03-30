import React from "react";
import {addDialogMessage, updateDialogMessageArea} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapToStateProps = (state) => {
    return {dialogsData: state.dialogsData};
};
const mapDispatchProps = (dispatch) => {
    return {
        updateDialogMessageArea: (text) => {
            dispatch(updateDialogMessageArea(text));
    },
        sendDialogMessage: () => {
            dispatch(addDialogMessage());
        }
    };
};

const DialogsContainer = connect(mapToStateProps, mapDispatchProps)(Dialogs);

export default DialogsContainer;