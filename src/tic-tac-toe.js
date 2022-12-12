import React from 'react'
import './tic-tac-toe.css'

const _empty = '🤔'
const _O = '🤪'
const _X = '☠️'
let _winner = null

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            cssClass: 'square',
            num: this.props.num // JF: for this to work, num must be used as an attribute name in the JSX for a Square tag
        }
    }

    render() {
        //console.debug(`Square.render(${this.state.num})`)
        return (
            <button
                className={this.props.cssClass}
                onClick={() => {
                    //this.setState({value: _X, foo: _empty})
                    this.props.onClick()
                }}
            >
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(_empty),
            player: _X
        }
    }

    renderSquare(i) {
        //return <Square value={this.state.squares[i]} foo={null} />
        //console.debug(`rendering square ${i}`)
        let cssClass = 'square'
        if (_winner && _winner.line.includes(i)) {
            cssClass = 'square-win'
        } else if (this.state.squares[i] === _X) {
            cssClass = 'square-x'
        } else if (this.state.squares[i] === _O) {
            cssClass = 'square-o'
        }
        return (
            <Square
                num={i} // JF: Added this for my own edification
                cssClass={cssClass}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    handleClick(i) {
        //console.debug(`Board.handleClick(${i})`)
        if (_winner) {
            // TODO: Change the board's background color and play a "ta-da" sound?
            // TODO: Add a "new game" button to the DOM that will reset the board
            // this.setState({})
        } else if (this.state.squares[i] == _empty) { // Disallow overwriting a square
            // JF:  Unclear why the following statement alone does not work: this.state.squares[i] = _X
            // JF:  It works if you then call: this.setState({squares: this.state.squares})
            // JF:  This suggests that calling setState() results in calling render()
            // JF:  Either way, the following approach using "immutable" (actually, un-mutated) objects is preferred
            const nextSquares = this.state.squares.slice() // create a copy rather than mutating the current array
            nextSquares[i] = this.state.player
            const nextPlayer = this.state.player == _X ? _O : _X
            this.setState({squares: nextSquares, player: nextPlayer})
            // TODO: Reset the move countdown timer?
        } else {
            // TODO: Pop up a warning/try again message and play a buzzer sound?
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (this.state.squares[a] != _empty &&
                this.state.squares[a] === this.state.squares[b] &&
                this.state.squares[a] === this.state.squares[c]) {
                return {
                    player: this.state.squares[a],
                    line: [a, b, c]
                }
            }
        }
        return null
    }

    render() {
        //console.debug('Board.render()')
        let status = `Next player: ${this.state.player}`
        _winner = this.calculateWinner()
        if (_winner) {
            status = `The winner is ${_winner.player}!`
        }

        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class TicTacToe extends React.Component {
    render() {
        return (
            <div className="game">
                <Board />
                {/* Not currently in use: <div className="game-info">*/}
                {/* TODO: Ideas:
                    * TODO: Let players choose their X or O character
                    * TODO: Let players choose a song to play during game play
                    * TODO: Keep track of recent outcomes, eg: who won, # moves
                    * TODO: Add a countdown timer - reset to 10s on every move - expires => lose or game over
                    * TODO: End game in a draw when there are no winning moves available
                    * TODO: Have the game act as player 2?
                */}
            </div>
        )
    }
}

export default TicTacToe