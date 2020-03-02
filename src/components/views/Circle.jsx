import React from 'react';

import '../styles/playboard.scss';

const Circle = ({ disabled, index, selected, checkIfScored }) => {
    const styles = {
        circle: 'play-board__circle-button',
    };
    return(
        <button
            disabled={disabled || selected}
            onClick={() => checkIfScored(index)}
            className={styles.circle}
            style={{ backgroundColor: selected ? 'blueviolet' : 'white' }}
        />
    )
};

export default Circle;