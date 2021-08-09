import React from 'react'
import { Numbers } from './Numbers'

export const Calculator = () => {
    return (
        <div className="calculator" data-testid="calculator-container">
            <main>
                <header>Personal Calculator</header>
                <Numbers/>
            </main>
            
        </div>
    )
}
