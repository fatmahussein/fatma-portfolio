export default function HeroSection(){
    return (
        <section id="hero-section" className="hero--section">
            <div className="hero--section--content--box">
            <div className="hero--section--content">
            <p className="section--title">Hi, i'm Fatuma,</p>
            <h1 className="hero--section--title">
             <span className="hero--section--title--color"> 
             Full stack  </span>{""}  {""}
        Developer
            </h1>
            <p className="hero--section--description text-sm">
     I design and code beautifully simple things, and I love what I do.
            </p>
            </div>
            <a href="https://www.linkedin.com/in/fatmahusseinhassan/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">Get In Touch</button>
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}
