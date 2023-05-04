import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeSlider from './components/HomeSlider';

const adminCreatedPage = (props) => {
    // console.log(props)
    const [page,setPage]= useState(props.page);

    const router = useRouter();

    useEffect(() => {
        setPage(props.page);
      }, [props]);


    return (
        <div className='bg-white text-black'>
            <div>
                <Navigation />
            </div>
            
            {/* <HomeSlider/> */}



            <div style={{height: '65vh'}}  className="container  mx-auto py-4">
                <div className='mb-10'>

                    <h1 className="text-4xl font-bold mb-4 uppercase text-center">{page.title}</h1>
                    <h3 className='text-2xl text-center'>
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
    const res = await fetch(`${process.env.api}/pages?route=${adminCreatedPage}`);
    // console.log(res)
    const data = await res.json();
    // console.log(data.data)
    return {
        props: {
            page: data.data
        }
    }

}

export default adminCreatedPage;