import { ReactElement } from 'react'

const navNames: Array<string> = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
]

const appPages: Array<ReactElement> = [
    test(),
    test(),
    test(),
    test(),
    test(),
    test(),
    test(),
    test(),
    test(),
    test(),
]

function test(): ReactElement {
    return (
        <span> test </span>
    )
}

export { navNames, appPages };