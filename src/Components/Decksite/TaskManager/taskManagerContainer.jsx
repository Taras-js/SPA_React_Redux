import * as React from "react";
import {connect} from "react-redux";
import PreLoader from "../../PreLoader/Preloader";
import TaskManager from "./taskManager";
import {updateNewsData, writeData} from "../../../Redux/taskmanager-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";


class TaskManagerContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div>{this.props.isFetching ? <PreLoader /> : null}</div>
                <TaskManager data={this.props.data}
                             updateNewsData={this.props.updateNewsData}
                             writeData={this.props.writeData}
                             newTextName={this.props.newTextName}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.TaskManager.data,
        newTextName: state.TaskManager.newTextName
    }
}

export default compose(connect(mapStateToProps, {writeData, updateNewsData}
), withRouter) (TaskManagerContainer);

