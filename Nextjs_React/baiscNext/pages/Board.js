import React, {Component} from "react";
import Square from "./Square";

class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

export default Board;