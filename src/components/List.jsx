import React from 'react'
import { Filter } from './Filter'
import { GameItem } from './GameItem'
import { Search } from './Search'

export const List = () => {
    return (
        <>
            <h1>VideoGame Library</h1>
            <Search/>
            <Filter/>
            <div class="container">
                <GameItem />
            </div>
        </>
    )
}
