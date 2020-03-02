import React from 'react';

import { CONSTANT } from "../../enums";
import {Circle} from "./index";
import '../styles/playboard.scss';

const PlayBoard = ({ started, checkIfPresent, checkIfScored }) => {

    const styles = {
        playBoardContainer: 'play-board__container',
    };

    const getCircles = () => {
        let displayCirclesArray = [];
            for(let i = 0; i < CONSTANT.COUNT; i ++) {
                displayCirclesArray.push (
                    <Circle
                        disabled={!started}
                        index={i}
                        selected={checkIfPresent(i)}
                        checkIfScored={checkIfScored}
                    />);
            }
            return displayCirclesArray;
    };

    return (
        <div className={styles.playBoardContainer}>
            {getCircles()}
        </div>
    )
};

export default  PlayBoard;