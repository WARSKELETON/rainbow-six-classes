import React, { Component } from "react";
import OperatorsData from "./OperatorsData";

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        operatorsData: OperatorsData
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
