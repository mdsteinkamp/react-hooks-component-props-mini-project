import React from "react";


//if minutes less or than 30 one coffee for every five
//if minutes greater or equal to 31 one bento for every 10

function Minutes ( {minutes} ) {
    const arr = []
    function emojiCalc (minutes) {
        if (minutes < 30) {
            let num = Math.ceil(minutes/5) *5
            num = num / 5
            for (let i = 1; i < num; i++) {
                return arr.push(i)
            }
            console.log(arr)

        }
    }

    return (
        <small>{minutes} minute read YEWAHHHHH {arr}</small>
    )
}

export default Minutes