import * as React from 'react'
import TicTacToe from "./tic-tac-toe";
import JFMuiAbout from "./JFMuiAbout";
import JFMuiSFDemo from "./JFMuiSFDemo";

/**
 * "Controller" to render the view specified by the caller (via props).
 * @param props - props.view should uniquely identify the view to render
 * @returns {JSX.Element}
 * @constructor
 */
function JFMuiContentBox(props) {
    switch (props.view) {
        case "about":
            return(
                <div className={"jf-mui-content"}>
                    <JFMuiAbout />
                </div>
            )
        case "sfdemo":
            return(
                <JFMuiSFDemo
                    queryTerm={props.partitionKey}
                    view={props.view}
                    queryLimit={props.queryLimit} />
            )
        case "tic-tac-toe":
            return (
                <div className={"jf-mui-content"}>
                    <TicTacToe />
                </div>
            )
        default:
            return (
                <div className={"jf-mui-content"}>
                    Invalid choice
                </div>
            )
    }
}

export default JFMuiContentBox