import React from 'react';
import './game.css';


function Square(props) {
    return (
        <button 
            className={"square " + props.highlight}
            onClick={props.onClick}>
            {props.value}
        </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (<Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={(this.props.highlight && this.props.highlight.includes(i))?'selected':''} />);
    }
  
    render() {
        const board = [];
        for (let i = 0; i < 3; i++){
            const children = [];
            for (let j = 0; j < 3; j++){
                children.push(this.renderSquare(i*3+j));
            }
            board.push(<div className="board-row">{children}</div>);
        }
      return (
          <div>
              {board}
          </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{squares: Array(9).fill(null), lastMove: null}],
            xIsNext: true,
            stepNumber: 0,
            selectedButton: null,
            startToEnd: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = [...current.squares];
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X':'O';
        this.setState({
            history: [...history, {squares: squares, lastMove: i}], 
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            selectedButton: null,
        });
    }

    handleToggle() {
        this.setState({
            startToEnd: !this.state.startToEnd,
        });
    }

    jumpTo(move) {
        const history = this.state.history;
        this.setState({
            xIsNext: (move % 2) === 0,
            stepNumber: move,
            history: history,
            selectedButton: move,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const highlight = winner? winner.three : null;
        let status;
        if(winner){
            status = 'Winner: ' + winner.player;
        }else if(allUsed(current.squares)){
            status = 'Draw';
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        let moves = [];
        if(this.state.startToEnd){
            moves = history.map((step, move) =>{
                const desc = move ? 'Go to move #' + move + ' at loc (' + Math.floor(step.lastMove/3) + ',' + step.lastMove%3 + ')': 'Go to game start';
                return(
                    <li key={move}>
                        <button className={(move === this.state.selectedButton)? 'selected' : ''} onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            });
        }else{
            for(let i = history.length-1; i >= 0; i--){
                const desc = (i === 0) ? 'Go to game start':'Go to move #' + i + ' at loc (' + Math.floor(history[i].lastMove/3) + ',' + history[i].lastMove%3 + ')';
                moves.push(
                    <li key={i}>
                        <button className={(i === this.state.selectedButton)? 'selected' : ''} onClick={() => this.jumpTo(i)}>{desc}</button>
                    </li>
                );
            }
        }
       

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares} 
                onClick={(i) => this.handleClick(i)}
                highlight={highlight}
            />
          </div>
          <div className="game-info">
            <button onClick={() => this.handleToggle()}>Toggle</button>
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {player: squares[a], three:lines[i]};
      }
    }
    return null;
  }

  function allUsed(squares) {
      let flag = true;
      for(let i = 0; i < squares.length; i++){
          if(!squares[i]){
              flag = false;
              break;
          }
      }
      return flag;
  }
  
  export default Game
  