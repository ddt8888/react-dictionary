import React from 'react';

function Word({ r_seq, r_word, r_link, r_chi, r_des, r_pos }) {
    return (
        <div class="item">
            <div class="word"><a href={r_link} target="_blank" rel="noreferrer">{r_word}<sup>{r_seq ? r_seq : ""}</sup> {r_chi}</a> {r_pos}</div>
            <p class="description">{r_des}</p>
        </div>
    )
}

export default Word;
