

import Head from 'next/head'


function Layuot({ title, Children }) {
    <>
        <Head>
            <title>{title ? title + '- Amazon' : 'Amazon'}</title>
        </Head>
        <div >
            <header>
                Header
            </header>
            <main>
                {Children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    </>

}

export default Layuot
