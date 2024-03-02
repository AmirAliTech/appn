import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Asia = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://public.lazybluffer.online/asia", {
                    method: "GET",
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error:", error.message);
                setError("Internal Server Error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='container mt-5'>
            <Helmet>
                <title>Sports</title>
                <meta name="description" content="vista news" />
            </Helmet>
            <div className='row h-100vh'>
                <div className='col-9 bg-smoke rounded-2 border border-1 overflow-hidden'>
                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            <div className="container my-3">
                                <div className="row">
                                    {data.map((item) => (
                                        <div className='col-4 ' key={item._id}>
                                            <div className="shadow-none my-2 card-background h-200px h-min-200px rounded-3 overflow-hidden " style={{ backgroundImage: `url("https://public.lazybluffer.online/${item.nfile.replace('uploads', 'uploads/')}")` }}>
                                                <div className="bg-black-opacity h-200px h-min-200px d-flex justify-content-end align-items-start flex-column px-2 py-2">
                                                    <h5>
                                                        {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                                                    </h5>
                                                    <p>
                                                        {item.desc.length > 50 ? `${item.desc.substring(0, 50)}...` : item.desc}
                                                    </p>
                                                    <Link to={`/news/${item.slug}`} className="link card-link">Go somewhere</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-3 '>
                    <div className='h-100 rounded-2 border border-1 overflow-hidden bg-smoke'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asia