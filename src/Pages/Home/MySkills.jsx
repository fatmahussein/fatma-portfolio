import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section className="skills--section" id="mySkills">
        
            <h2 className="skills--section--heading--expertise">Tech Stack</h2>
          
            <div className="skills--section--container">
            <div className="skills--section--img-container">
                {data?.skills?.map((item, index) => {
                    return(          
                 
                        <img key={index}
                          src={item.description}
                          className="skills--section--img"
                          alt="techstack"
                        />
                 
                
                    );
                })}
                </div>
           </div>
        </section>
    )
} 