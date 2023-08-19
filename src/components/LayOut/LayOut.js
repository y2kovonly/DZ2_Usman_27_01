import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const LayOut = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/post-creation"}>
                            Create Post
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default LayOut;