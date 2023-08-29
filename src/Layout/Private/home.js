import React from "react";

function Home(){
    return (
        <div style={{height : '87.2vh', paddingTop : '66px', overflowY : 'scroll'}}>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-sm-12 col-md-7">
                        <p style={{fontSize : 50, marginTop : 100, marginLeft : 20, fontWeight : 'bold'}}>Transform your business with <br></br> <span style={{color : "#f14836", fontStyle : 'italic',fontWeight : '400'}}>flexible and powerful </span> <br></br> software solutions</p>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <img src="https://focusbytes.com/themes/prismify-bootstrap-starter-kit/assets/images/hero-image.png" style={{width : 500}}></img>
                    </div>

                    <div className="col-12 text-center">
                        <p style={{fontSize : 40}}> <span style={{fontSize : 20, color : "#f14836"}}>WELCOME</span> <br></br> 
                            <span style={{fontWeight : 'bolder'}}>Our 10+ years working experience make a </span> different <br></br>
                            software development company.
                        </p>
                    </div>

                    <div className="col-12">
                        <img src="https://focusbytes.com/themes/prismify-bootstrap-starter-kit/assets/images/about.png"></img>
                    </div>

                    <div className="col-12 mt-4 text-center">
                        <p style={{fontSize : 22}}> <span style={{fontWeight : 'bolder'}}>FOCUSBYTES PVT Limited</span> provides end-to-end solutions, from strategy to design to engineering to execution, on the world's most complex technical problems. Our mission is to help our customers translate vision into value by creating technological breakthroughs that change industries and increase their competitive advantage.</p>
                    </div>

                   <div className="col-12 mt-4 text-center">
                        <p style={{fontSize : 35}}> <span style={{fontSize : 16, color : '#f14836'}}>OUR SERVICES</span> <br></br>
                            <span style={{fontWeight : 'bolder'}}>We Are Giving Best Services </span> for <br></br>
                            Your Business.
                        </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Home;