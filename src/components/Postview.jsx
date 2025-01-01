import Post from "./Post"
import './Postview.css'
export default function Postview({posts}){
    return (
        <>
        <div className="postview">
            {posts.map((movie, index) => {
                return <Post key={index} title={movie.title} description={movie.description}/>;
            })}
        </div>  
        </>
    )
}