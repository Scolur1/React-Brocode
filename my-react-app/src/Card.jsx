import profilePic from './assets/Lorax.webp'

function Card (){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"/>
            <h2 className='card-title'>Lorax</h2>
            <p className='card-text'>My name is Lorax, and I am a full stack developer. 
                I also enjoy playing video games.</p>
        </div>
    );
}

export default Card