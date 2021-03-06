import React, { useEffect } from 'react';

import * as chess from '../api/chess/chess';
import ChessBoard from '../components/chess/ChessBoard';


/** Basic game page */
function Game() {

    useEffect(() => {
        chess.start_game();
        console.log('Here!')
    }, [])

    return (
        <div className="Game">
            <ChessBoard />
        </div>
    )
}


export default Game;