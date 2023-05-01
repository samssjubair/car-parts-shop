import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const adminCreatedPage = (props) => {
    // console.log(props)
    const [page,setPage]= useState(props.page);

    const router = useRouter();

    useEffect(() => {
        setPage(props.page);
      }, [props]);


    return (
        <div>
            <div>
                <Navigation />
            </div>
            



            <div style={{height: '65vh'}}  className="container  mx-auto py-4">
                <div className='mb-10'>
                    <h1 className="text-4xl font-bold mb-4 uppercase text-center">{page.title}</h1>
                    <h3>
                        {page.subheader}
                    </h3>
                </div>
                <p className="text-lg text-center">{page.content}</p>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const {adminCreatedPage} = context.query;
    // console.log("hi",adminCreatedPage);
    const res = await fetch(`http://localhost:4800/api/v1/pages?route=${adminCreatedPage}`);
    console.log(res)
    const data = await res.json();
    // console.log(data.data)
    return {
        props: {
            page: data.data
        }
    }

}

export default adminCreatedPage;