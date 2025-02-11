import React from 'react';
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
const page = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <NavBar />
            <section>
                <div
                    className="hero min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url(/blogbg.png)" }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase font-unbounded">blog </h1>
                            <p className="mb-5">Transforming Ideas into Impactful Solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10 flex flex-row  gap-30">
                
                <div className="flex flex-col gap-10 mt-20">
                    {/* First Card */}
                    <p>Featured Post</p>

                    <div className="card bg-base-100 w-[500px] h-[400px] shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="flex flex-row space-x-3">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div >
                        <div className='ml-6 space-y-6 mt-20'>
                            <p>Shortcut Links</p>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 ml-6 space-y-8" >
                            <p>Featured Video</p>
                            <img className="rounded-2xl" src="/featuredvideo.png" />
                            
                            </div>

                    </div>


                </div>
            </section>

            <Footer/>



        </div>
    );
};

export default page;