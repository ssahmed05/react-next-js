import Head from "next/head";
import { useEffect } from "react";

// export const getStaticProps = async () => {

//     const list = await fetch('https://jsonplaceholder.typicode.com/users');
//     const res = await list.json();
//     return {
//         props: {res}
//     }
// }

export  async function getServerSideProps() {
    const list = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await list.json();
    return {
        props: {res}
    }
  }

export default function Members({res}) {
    
    return (
        <>
            <Head>
                <title>Members us</title>
            </Head>
            <div className="row">
                <div className="col-md-12">

                    <h1>Members Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse velit eligendi dolor quidem nam explicabo porro est pariatur ipsam dolorum ad, atque, blanditiis quas incidunt cumque sequi obcaecati possimus!</p>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>List of our memebers</h3>
                    <ul className="list-group">
                        {
                            res.map(dataInList=> (<li key={dataInList.id} className="list-group-item list-group-item-action">{dataInList.name}</li>) )
                        }

                    </ul>
                </div>
            </div>
        </>
    );

};
