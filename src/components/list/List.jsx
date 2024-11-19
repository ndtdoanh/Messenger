import ChatList from './chatList/ChatList';
import './list.css';
import UserInfo from './userInfo/userInfo';

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};
export default List;
