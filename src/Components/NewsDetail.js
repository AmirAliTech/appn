import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../App.css"
import Loading from './Loading';
import { Helmet } from 'react-helmet';

const NewsDetail = () => {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [related, setRelated] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://public.lazybluffer.online/findOneNews/${slug}`, {
                    method: "GET",
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    useEffect(() => {
        const fetchRelatedNews = async () => {
            if (data && data.category) {
                try {
                    const response = await fetch(`https://public.lazybluffer.online/findRelatedNews/${data.category}/${data.title}`, {
                        method: "GET",
                    });
                    if (!response.ok) {
                        throw new Error(`Failed to fetch related data: ${response.status}`);
                    }
                    const result = await response.json();
                    setRelated(result);
                } catch (error) {
                    console.error("Error:", error.message);
                    setError(error.message);
                }
            }
        };

        if (data) {
            fetchRelatedNews();
        }
    }, [data]);

    return (
        <div>
            {data && (
                <Helmet>
                    <title>{data.title}</title>
                    {data.desc ? (<meta name="description" content={data.desc} />) : (<meta name="description" content="vista news" />)}
                </Helmet>
            )}
            <div className='container mt-5 '>
                <div className='row  h-100'>
                    <div className='col-12  h-100 '>
                        <div>
                            {loading ? (
                                <Loading />
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <div className="container my-3">
                                    <div className="row">
                                        <div className="col-9 d-flex flex-column align-items-center ">
                                            {data && (
                                                <>
                                                    <img src={`https://public.lazybluffer.online/${data.nfile}`} width="50%" alt="" />
                                                    <h1 className='w-100'>{data.title}</h1>
                                                    <div className='w-100' dangerouslySetInnerHTML={{ __html: data.content }}></div>
                                                </>
                                            )}
                                        </div>
                                        <div className="col-3 bg-smoke border border-1 rounded-2 h-100vh py-3 ">
                                            {related.map((rn) => (
                                                <div className='d-flex justify-content-center flex-column align-items-center border border-1 bg-white px-3 py-2 rounded-3 overflow-hidden ' key={rn._id}>
                                                    <img src={`https://public.lazybluffer.online/${rn.nfile}`} width="80%"   alt="" />
                                                    <h4 className='w-100'>{rn.title}</h4>
                                                    <p className='w-100'>{rn.desc}</p>
                                                    <span className='w-100'><Link className='link' to={`/news/${rn.slug}`}>View more</Link></span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;
