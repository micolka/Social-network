import {addDialogMessage, updateDialogMessageArea} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapToStateProps = (state) => {
    return {
        dialogsData: state.dialogsData,
        isAuth: state.authData.isAuthorised
    };
};

const DialogsContainer = connect(mapToStateProps,
    {updateDialogMessageArea, addDialogMessage})(Dialogs);

export default DialogsContainer;