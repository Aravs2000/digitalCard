import './Info.css'
import pic from './aravs_pic_r.jpg'


function Info(){
    return(
        <div className='info'>
            <img className='pic' src={pic} />
            <h1 className='name'> Aravind C</h1>
            <h2 className='job'> React Developer</h2>
            <h2 className='website'> aravswebarchive.org </h2>
            <button type='button' className='mailB'>
            <i class="mailS"></i><a href='mailto:sekararavind5@gmail.com'> Email</a></button>
            <button type='button' className='linkB'>
            <i class="linkS"></i><a href='https://www.linkedin.com/in/aravind-chandrasekaran-8897001b5/'> LinkedIn</a></button>
        </div>
    );
}

export default Info