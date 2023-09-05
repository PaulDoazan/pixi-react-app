import React, { useState } from 'react'

export default function SubApp({ id, reverse }) {
    const [currentGame, setCurrentGame] = useState(null)
    let fullClass = `sub-app sub-${id} bg-color-${id + 1}`
    if (reverse) fullClass += ' sub-app-reverse'

    const onBtnClick = (e) => {
        if (currentGame === e.target.dataset.game) {
            setCurrentGame(null)
        } else {
            setCurrentGame(e.target.dataset.game)
        }

    }

    return (
        <>
            <div className={fullClass}>
                <div className={`container`}>
                    <h1>SubApp #{id}</h1>
                    <div className="games-menu">
                        <div className="btn-game" data-game='fishes' onClick={onBtnClick}>Fishes</div>
                        <div className="btn-game" data-game='towerSlice' onClick={onBtnClick}>Tower</div>
                    </div>
                    {currentGame ? <iframe src={`${process.env.PUBLIC_URL}/games/${currentGame}/index.html`} scrolling='no'></iframe> : <iframe src=''></iframe>}
                </div>
            </div>
        </>
    )
}
