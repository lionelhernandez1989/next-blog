import Head from "next/head";

const Home = ({preview}) => {
    return (
        <>
            <Head>
                <title>{preview.title}</title>
                <meta property="og:description" content={preview.description}/>
                <meta property="og:title" content={preview.title}/>
                <meta property="og:url" content={preview.url}/>
                <meta property="og:image" content={preview.image}/>
            </Head>
        </>
    )
}

export async function getServerSideProps(context){

    const response = await fetch(`http://api.linkpreview.net/?key=5c018ee22f94225bf156dde63da57e7d&q=${context.query.url}`);
    const data = await response.json();

    return {
        props:{
            preview: data
        }
    }
}

export default Home;