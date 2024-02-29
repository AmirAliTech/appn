import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://public.lazybluffer.online/findtrend", {
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

        <div className='container mt-5 '>
            <Helmet>
                <title>Vista</title>
                (<meta name="description" content="vista news" />)
            </Helmet>
            <div className='row h-100vh'>
                <div className='col-9 bg-danger '>
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
                                            <div class="card shadow-none my-2" style={{ width: 250 }}>
                                                <img src={`https://public.lazybluffer.online/${item.nfile}`} class="card-img-top max-height" alt={item.title} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <Link to={`/news/${item.slug}`} class="link text-dark">Go somewhere</Link>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-3 bg-secondary '>
                    side
                </div>
            </div>
        </div>
    )
}

export default Home