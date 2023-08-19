import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const PostCreationPage = () => {
    const [inputData, setInputData] = useState('')
    const postsNavigate = useNavigate()
    const [postResponse, setPostResponse] = useState({})

    const PostCreationFunc = () => {
        axios.post('https://dummyjson.com/posts/add', {
            title: inputData,
            userId: '1',
        })
            .then(function (response) {
                setPostResponse(response.data)
                // console.log(response.data)
                postsNavigate('/')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={'cont'}>
            <input
                type="text"
                value={inputData}
                onChange={e => setInputData(e.target.value)}
            />
            <button onClick={PostCreationFunc}>Create Post</button>
        </div>
    );
};

export default PostCreationPage;