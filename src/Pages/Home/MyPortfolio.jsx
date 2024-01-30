import Sliders from "./slider";

export default function MyPortfolio(){
    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--content--box">
              
                <div className="portfolio--container">
                   <h2 className="section--heading">  Recent Projects </h2>
                </div>
                 <div>
                 <a href="https://github.com/fatmahussein" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-github">
            <img src="./img/github.svg" alt="github"  className="github"/>
            Visit My GitHub
          </button> 
          </a>
                </div>
            </div>
            <div className="portfolio--section--container">
               
                  <Sliders/>
           
            </div>
        </section>
    )
}