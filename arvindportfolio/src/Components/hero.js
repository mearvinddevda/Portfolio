import TypeWriter from "typewriter-effect"
const Hero=()=>{
    return (
        <div className="main-hero">
                <div className="h-txt" >
                    <h1 className="herotxt">Hello,I'm <br/>
                    <div style={{color:'white'}}>
                    <TypeWriter
                            options={{
                            autoStart:true,
                            loop:true,
                            delay:20,
                            strings:[
                                'Arvind Devda',
                                'Front-End Developer',
                                'MERN Developer'
                            ],

                            }}
                        />
                    </div>
                    </h1>
                    <p style={{color:'#DBD7D2'}}>Hello , I am Arvind Devda ,I am a enthusiasmic Front-End Developer</p>
                    <button style={{width:100}}><b>Hire Me</b></button>
                    <button style={{width:100}}><b>Resume</b></button>
                </div>
            <img src="/assets/anime-img.jpg" alt="LOGO"/>
        </div>
    );
}

export default Hero;