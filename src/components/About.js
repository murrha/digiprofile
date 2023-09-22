import profilepic from "../img/profilepic.png";

const About = () => {
    return ( <section id="about">
    <div className="card">
       <div className="row">
            <div className="col md-8">
                <div className="card-body">
                    <h1 className="card-title">Hi, I'm Marja</h1>
                    <h2 className="card-text">I'm a fullstack developer passionate about design and interactivity.</h2>
                </div>
                
            </div>
            <div className="col md-4">
                <img src={profilepic} alt="blank profile picture" className="rounded float-end"/>
            </div>
       </div>
    </div>
</section>  );
}
 
export default About;