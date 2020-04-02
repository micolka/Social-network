import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn4.iconfinder.com/data/icons/halloween-colored-1/96/halloween_monster_zombie_96-512.png' alt="zombie ava"></img>
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;