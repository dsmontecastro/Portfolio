const pages = [
    { name: 'test', body: test(0) },
    { name: 'test', body: test(1) },
    { name: 'test', body: test(2) },
    { name: 'test', body: test(3) },
    { name: 'test', body: test(4) },
    { name: 'test', body: test(5) },
    { name: 'test', body: test(6) },
    { name: 'test', body: test(7) },
    { name: 'test', body: test(8) },
    { name: 'test', body: test(9) },
]

const pageCount = pages.length;

function test(id: number) {

    const name = 'test-' + id;
    const i = id + 1;

    return (
        <div id={name} className='w-full h-full border-4 border-red-500 flex justify-center items-center'>
            {i}-------------------------------------------------------------{i}
        </div>
    )
}

export { pages, pageCount };