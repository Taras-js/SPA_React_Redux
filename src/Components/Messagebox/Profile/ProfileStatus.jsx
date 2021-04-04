import * as React from "react";
import s from './PropfileStatus.module.css'
export class ProfileStatus extends React.Component {
    // statusRef = React.createRef()
    state = {
        editStatus: false,
        status: this.props.status

    }
    activateEditStatus = () => {

        this.setState({editStatus: true})

    }
    deactivateEditStatus = () => {

        this.setState({editStatus: false})
        this.props.getUpdatePersonStatus(this.state.status);
    }
    addSetStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {

        return (
            <div>
                {!this.state.editStatus && <div>
                    <span className={s.status}
                          onDoubleClick={this.activateEditStatus}
                          > {this.props.status || 'you status'}</span>

                </div>}
                {this.state.editStatus &&  <div>
                    <input onChange={this.addSetStatus}
                           autoFocus={true}
                           value={this.state.status}
                           onBlur={this.deactivateEditStatus}
                            />

                </div>}
            </div>
        )
    }
}
export default ProfileStatus;

//        this.setState({editStatus: true});
// Обновление this.forceUpdate - не использовать;
// Domain-Driven Design — предметно-ориентированное проектирование;