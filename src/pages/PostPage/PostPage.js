import { useState, useEffect } from 'react';
import axios from 'axios';

function PostPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
            });
    }, []);

    if (!posts) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Список постов</h1>
            <ol className={'posts-cont'}>
                {posts.map(post => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ol>
        </div>
    );
}

export default PostPage;