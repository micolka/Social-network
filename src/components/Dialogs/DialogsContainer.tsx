import {dialogsActions} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from "../../redux/reduxStore";

const mapToStateProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogsData
    };
};

export default compose<React.ComponentType>(
    connect(mapToStateProps, {addDialogMessage: dialogsActions.addDialogMessage}),
    withAuthRedirect
)(Dialogs);