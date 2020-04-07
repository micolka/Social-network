import {addDialogMessage, updateDialogMessageArea} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapToStateProps = (state) => {
    return {
        dialogsData: state.dialogsData,
    };
};

export default compose(
    connect(mapToStateProps, {updateDialogMessageArea, addDialogMessage}),
    withAuthRedirect
)(Dialogs);