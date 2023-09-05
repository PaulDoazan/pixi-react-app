import React from 'react'

export default function SubApp({ id, reverse }) {
    let fullClass = `sub-app sub-${id}`
    if (reverse) fullClass += ' sub-app-reverse'

    const gameDirectory = id % 2 ? 'towerSlice' : 'fishes'
    return (
        <>
            <div className={fullClass}>
                <h1>SubApp #{id}</h1>
                <div className="container">
                    <iframe src={`${process.env.PUBLIC_URL}/games/${gameDirectory}/index.html`}></iframe>
                </div>
            </div>
        </>
    )
}
