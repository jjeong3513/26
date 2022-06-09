import React from 'react';
import './css/index.css';
import userData from './../data/userData.json';

const UserList = () => {
    const users = userData;
    return (
        <div>
            <ul className='user-lists'>
                { 
                    userData.map((user)=>{
                        return(
                        <li className='user-list' key={user.id}>
                            <img src={user.picture} alt={user.name} />
                            <span className='username'>{user.name}</span>
                            {user.online?<span className='online on'>ONLINE</span>:<span className='online off'>OFFLINE</span>}
                        </li>  // true일 때는 ONLINE이 출력되고, false일 때는 OFFLINE이 출력됨
                        )
                    })
                }
              {/*  <li className='user-list'>
                    <img src='' alt='0' />
                    <span className='username'>홍길동</span>
                    <span className='online'>온라인</span>
                    </li>  
                    */}
            </ul>
        </div>
    );
};

export default UserList;