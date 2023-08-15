const pages = [
    { name: "test", body: test(0) },
    { name: "test", body: test(1) },
    { name: "test", body: test(2) },
    { name: "test", body: test(3) },
    { name: "test", body: test(4) },
    { name: "test", body: test(5) },
    { name: "test", body: test(6) },
    { name: "test", body: test(7) },
    { name: "test", body: test(8) },
    { name: "test", body: test(9) },
]

const pageCount = pages.length;

function test(id: number) {
    return (
        <div className="w-full h-full text-center">
            <p className='text-9xl text-white'> ITEM#{id + 1}</p>
            <span> -------------------------------------------------------------- </span>
        </div>
    )
}

export { pages, pageCount };