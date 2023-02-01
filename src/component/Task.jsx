import React from 'react'


function Task() {
    return (

        <body className="sb-nav-fixed">
            <nav className="sb-topnav navbar navbar-expand navbar-dark">
                 <img className=' logo' src="./logo.png" alt=".." />
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <h6 className='text-center '>Today is 31 January 2023</h6>
                </form>
                <div className='col-4'></div>
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <div className="sb-nav-link-icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                    <a  className="ps-2 logout" href="#!">Log out</a>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav" id="sidenavAccordion">
                        <div className="sb-sidenav-menu mt-5">
                            <div className="nav">
                                <a className="nav-link text-black" href="/To">
                                    <div className="sb-nav-link-icon"> <i class="fa-solid fa-user"></i></div>
                                    Nada Bhy
                                </a>
                                <a className="nav-link text-black collapsed" href="#" >
                                    <div className="sb-nav-link-icon"><i class="fa-solid fa-list-check"></i></div>
                                    Tasks
                                </a>
                                <a className="nav-link text-black collapsed" href="#">
                                    <div className="sb-nav-link-icon"><i class="fa-sharp fa-solid fa-clock-rotate-left"></i></div>
                                    History
                                </a>
                            </div>
                        </div>

                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <section class="pt-5">
                        <div class="container mt-5">
                            <div class="col-md-12  d-flex px-md-5 justify-content-center">
                                <div className='borde'> </div>
                                <div class=" text-center">
                                    <h2>Hello, Nada Bouyahya</h2>
                                    <div className='d-flex pt-3 bettwin'>
                                        <div className='d-flex '>
                                            <p class="text-black-50 mx-1">You have</p> <p className='text-danger mx-1'>6</p> <p className=' text-black-50 mx-1'>tasks</p>
                                        </div>
                                        <button className='btn btn-success'>Add new task</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <main>
                        <section class="py-5">
                            <div class="container px-4 px-lg-5 mt-5">
                                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-5 justify-content-center p-4">
                                    <div id='card ' className="card-body mx-5">
                                        <div class="col-0 mb-0">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="fw-bolder">task title here</h5>

                                                        2h Left
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className='px-1'>from 11 : 30</p>
                                                        <p>to 13 : 30</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-top-0 bg-transparent">
                                                    <div class="d-flex text-center">
                                                        <a class="btn  mt-auto" href="#">edit</a>
                                                        <p className='px-4 mt-auto'>Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='card' className="card-body mx-5">
                                        <div class="col-0 mb-0">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="fw-bolder">task title here</h5>

                                                        2h Left
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className='px-1'>from 11 : 30</p>
                                                        <p>to 13 : 30</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-top-0 bg-transparent">
                                                    <div class="d-flex text-center">
                                                        <a class="btn  mt-auto" href="#">edit</a>
                                                        <p className='px-4 mt-auto'>Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='card' className="card-body mx-5">
                                        <div class="col-0 mb-0">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="fw-bolder">task title here</h5>

                                                        2h Left
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className='px-1'>from 11 : 30</p>
                                                        <p>to 13 : 30</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-top-0 bg-transparent">
                                                    <div class="d-flex text-center">
                                                        <a class="btn  mt-auto" href="#">edit</a>
                                                        <p className='px-4 mt-auto'>Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='card' className="card-body mx-5">
                                        <div class="col-0 mb-0">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="fw-bolder">task title here</h5>

                                                        2h Left
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className='px-1'>from 11 : 30</p>
                                                        <p>to 13 : 30</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-top-0 bg-transparent">
                                                    <div class="d-flex text-center">
                                                        <a class="btn mt-auto" href="#">edit</a>
                                                        <p className='px-4 mt-auto'>Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='card' className="card-body mx-5">
                                        <div class="col-0 mb-0">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="fw-bolder">task title here</h5>

                                                        2h Left
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className='px-1'>from 11 : 30</p>
                                                        <p>to 13 : 30</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-top-0 bg-transparent">
                                                    <div class="d-flex text-center">
                                                        <a class="btn  mt-auto" href="#">edit</a>
                                                        <p className='px-4 mt-auto'>Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='card' className="card-body mx-5">
                                        <div class="col-0 mb-0">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <h5 class="fw-bolder">task title here</h5>

                                                        2h Left
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className='px-1'>from 11 : 30</p>
                                                        <p>to 13 : 30</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-top-0 bg-transparent">
                                                    <div class="d-flex text-center">
                                                        <a class="btn  mt-auto" href="#">edit</a>
                                                        <p className='px-4 mt-auto'>Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </body>

    );
}

export default Task;