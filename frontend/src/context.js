import React, { Component } from "react";
import OperatorsData from "./OperatorsData";

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        operatorsData: OperatorsData,
        type: "attacker"
    };

    getTypeColor = () => {
        return this.state.type === "attacker" ? "#EF7B06" : "#0682D2";
    };

    toggleType = () => {
        const newType =
            this.state.type === "attacker" ? "defender" : "attacker";

        this.setState({
            type: newType
        });
    };

    getOperator = id => {
        return this.state.operatorsData.find(operator => operator.id === id);
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getTypeColor: this.getTypeColor,
                    toggleType: this.toggleType,
                    getOperator: this.getOperator
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
