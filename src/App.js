import React, { Component } from 'react';
import TileContainer from './components/TileContainer/TileContainer';
import data from './RndNumGenerator';

class App extends Component {
    constructor() {
        super();
        this.state = {
            table: data
        };
    }

    changeNum = id => {
        let tileIndex = this.state.table.findIndex(el => {
            return el.id === id;
        });
        const table = [...this.state.table];
        const nullIndex = this.state.table.findIndex(el => {
            return el.num === null;
        });
        if (
            nullIndex - tileIndex === 1 ||
            nullIndex - tileIndex === 4 ||
            tileIndex - nullIndex === 1 ||
            tileIndex - nullIndex === 4
        ) {
            table[nullIndex].num = table[tileIndex].num;
            table[tileIndex].num = null;
        }
        setTimeout(() => {
            this.setState({ table: table });
        }, 1000);
    };

    render() {
        return (
            <div className="App">
                <TileContainer table={this.state.table} click={this.changeNum} />
            </div>
        );
    }
}

export default App;