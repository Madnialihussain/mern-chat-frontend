import { ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { AppContext} from "../context/appContext"
import {useEffect, useContext} from 'react';
import { addNotifications, resetNotifications} from "../features/userSlice";

function Sidebar() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()
  const { socket, setMembers, members, setCurrentRoom, setRooms, privateMemberMsg, rooms, setPrivateMemberMsg, currentRoom } = useContext(AppContext);


  function joinRoom(room, isPublic = true) {
    if (!user) {
      return alert("Please login");
    }

    socket.emit("join-room", room);
    setCurrentRoom(room);

    if(isPublic) {
      setPrivateMemberMsg(null)
    }
    //dispatch for notification
    dispatch(resetNotifications(room));

    socket.off('notifications').on('notifications', (room) => {
      dispatch(addNotifications(room));
    })
  }
  useEffect(() => {
    if (user){
      setCurrentRoom("general");
      getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  })

  function getRooms(){
    fetch("http://localhost:5001/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }

  function orderIds(id1, id2){
    if (id1 > id2){
      return id1 + "-" + id2;
    }else{
      return id2 + "-" + id1;
    }
  }

  function handlePrivateMemberMsg(member){
    setPrivateMemberMsg(member);
    const roomId = orderIds(user._id, member._id);
    joinRoom(roomId, false)
  }

  if(!user) {
    return <></>
  }

  return (
    <>
      <h2> Available Rooms </h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx} onClick={() => joinRoom(room)} active= {room == currentRoom} style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between'}}>
            {room} {currentRoom !== room && <span className="badge rounded-pill bg-primary"></span>}
            </ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      {members.map((member) => (<ListGroup.Item key={member.id} style={{cursor: 'pointer'}} active={privateMemberMsg?._id == member?.id} onClick={() => handlePrivateMemberMsg(member)} disabled={member._id === user._id}>
        {member.name}
      </ListGroup.Item>))}
    </>
  )
}

export default Sidebar