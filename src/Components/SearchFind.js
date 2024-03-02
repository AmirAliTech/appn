import React from "react";
import { useSearch } from "../Context/Search";
import { Link } from "react-router-dom";
const SearchFind = () => {
    const [values, setValues] = useSearch();
    return (
        <div className="container">
            <div className="text-center">
                <h1>Search Resuts</h1>
                <h6>
                    {values?.results.length < 1
                        ? "No Results Found For Your Search Please Try a Different Search"
                        : `Found ${values?.results.length} Results For Your Search `}
                </h6>
                <div className="d-flex flex-wrap mt-4">
                    {values?.results.map((p) => (
                        <div className=" m-2" style={{ width: "18rem" }}>

                            <div className="shadow-none my-2 card-background h-200px h-min-200px rounded-3 overflow-hidden " style={{ backgroundImage: `url("https://public.lazybluffer.online/${p.nfile.replace('uploads', 'uploads/')}")` }}>
                                <div className="bg-black-opacity h-200px h-min-200px d-flex justify-content-end align-items-start flex-column px-2 py-2">
                                    <h5 className="w-100 text-start ">
                                        {p.title.length > 30 ? `${p.title.substring(0, 30)}...` : p.title}
                                    </h5>
                                    <p className="w-100 text-start ">
                                        {p.desc.length > 50 ? `${p.desc.substring(0, 50)}...` : p.desc}
                                    </p>
                                    <Link to={`/news/${p.slug}`} className="link card-link">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchFind;
