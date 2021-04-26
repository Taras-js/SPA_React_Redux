import React, {} from 'react';
import s from './Profile.module.css';
import small from "../Contacts/Contacte/Img/3AlV.gif";
import PreLoader from "../../PreLoader/Preloader";
import Photos from '../Contacts/Contacte/Img/3AlT.gif'

const ProfileData = (props) => {
    let NewProfile = (props) => {
        return (
            <div className={s.profile}>
                {props.name}
                {props.age}
                {props.work}
                {props.dream}
                {props.id}
            </div>)
    };
    let personalProfile = props.PersonalPage.person.map(person =>
        <NewProfile id={person.id} name={person.name} age={person.age}
                    work={person.work} dream={person.dream}/>);
    let AddPosts = (props) => {
        return (
            <div className={s.post}>
                <img alt='disabled' src={small} id='2'/>
                {props.post}
            </div>)
    };
    let newPosts = props.PersonalPage.posts.map(posts => <AddPosts src={small}
                     id={posts.id} post={posts.post}/>);
    let onWritePost = () => {
       props.writePost();
    };
    let addNewPost = React.createRef();
    let onChangeClick = () =>  {
       let text = addNewPost.current.value;
        props.updateNewsPostText(text);
    };
    if (!props.profile){ return <PreLoader /> }

    return (
        <div className={s.profile}>
            <img className={s.large} alt='disabled'
            src={props.profile.photos.small !== null
                ? props.profile.photos.small
                : Photos }/>
            <div>{personalProfile}</div>
            <div> My posts
                <div>{newPosts}</div>
                <div><textarea onChange={onChangeClick}
                               ref={addNewPost}
                               value={props.newTextPost}/></div>
                <div>
                    <button onClick={onWritePost}>'Send Post'</button>
                </div>
            </div>
        </div>
    );
}
export default ProfileData;