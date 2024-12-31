import './Post.css'
import poster from '../assets/nosferatu.png';
export default function Post(props){
    return (
        <>
        <div className="post post_div">
            <img className="poster post_div" src={poster} alt="Unluck" />
            <div className="post_div">
                <h1 className='post_title'> {props.title} </h1> 
            </div>
            <div className="post_div"> 
                <p className='description'> {props.description}</p>
            </div>
        </div>
        </>
    )
}