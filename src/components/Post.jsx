import './Post.css'
import poster from '../assets/nosferatu.png';
export default function Post(props){
    return (
        <>
        <div className="post">
            <img className="poster" src={poster} alt="Unluck"/>
            <h1 className='post_title'> {props.title} </h1> 
            <p className='description'> {props.description}</p>
        </div>
        </>
    )
}