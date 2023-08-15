const pageNames = [
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

const pageBodies = [
    test(1),
    test(2),
    test(3),
    test(4),
    test(5),
    test(6),
    test(7),
    test(8),
    test(9),
    test(10),
]

function test(id: number) {
    return (
        <div className="w-full h-full text-center">
            <p className='text-9xl text-white'> ITEM#{id}</p>
            <span> -------------------------------------------------------------- </span>
        </div>
    )
}

export { pageNames, pageBodies };