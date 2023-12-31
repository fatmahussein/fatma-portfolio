export default function HeroSection(){
    return (
        <section id="hero-section" className="hero--section">
            <div className="hero--section--content--box">
            <div className="hero--section--content">
            <p className="section--title">Hi, i'm Fatma</p>
            <h1 className="hero--section--title">
             <span className="hero--section--title--color">Full Stack</span>{""}
             <br/>
             Developer
            </h1>
            <p className="hero--section--description text-md">
            I’m a software developer! I can help you build a product , feature or website. Look through some of my work and experience! 
                <br/>If you like what you see and have a project you need coded, don’t hesitate to contact me.
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
