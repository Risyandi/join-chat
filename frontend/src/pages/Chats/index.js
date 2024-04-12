import { useState, useEffect } from "react";
import SendMessage from "../../components/SendMessage";
import Header from "../../components/Header";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getMessageAllByRoom } from "../../api/messageChat";

const ChatsPage = ({ socket }) => {
  const navigate = useNavigate();
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [searchParams] = useSearchParams();

  const room = searchParams.get("room");
  const username = searchParams.get("username");

  useEffect(() => {
    if (room === null && username === null) {
      navigate(`/`);
    }
  }, [navigate, room, username]);

  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          createdTime: data.createdTime,
        },
      ]);
    });

    // Remove event listener on component unmount
    return () => socket.off("receive_message");
  }, [socket, username]);

  const fethMessageInRoom = () => {
    getMessageAllByRoom({ room: room })
      .then((result) => {
        setMessagesReceived((state) => [...state, ...result.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fethMessageInRoom();
    // eslint-disable-next-line
  }, [room]);

  // format date -> dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div>
      <Header room={room} />
      <div className="min-h-screen my-2 mb-20">
        {messagesRecieved.map((message, index) =>
          username === message.username ? (
            // sender
            <div className="mx-auto w-full h-full" key={index}>
              <div className="relative overflow-hidden h-full">
                <div className="mb-8 flex items-center justify-end sm:justify-around w-full">
                  <div className="sm:w-5/12"></div>
                  <div className="rounded-md bg-chat-green text-white shadow-md w-[250px] sm:w-5/12 px-4 py-4 text-[14px] mx-5">
                    <div className="mb-3 font-bold text-red-kazoku">
                      {message.username}
                    </div>
                    <div className="mb-1">{message.message}</div>
                    <div>{formatDateFromTimestamp(message.createdTime)}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // receiver
            <div className="mx-auto w-full h-full" key={index}>
              <div className="relative overflow-hidden h-full">
                <div className="mb-8 flex sm:flex-row-reverse justify-start sm:justify-around items-center w-full">
                  <div className="sm:w-5/12"></div>
                  <div className="rounded-md bg-chat-smooth-white shadow-md w-[250px] sm:w-5/12 px-4 py-4 text-[14px] mx-5">
                    <div className="mb-2 font-bold text-red-kazoku">
                      {message.username}
                    </div>
                    <div className="mb-1">{message.message}</div>
                    <div>{formatDateFromTimestamp(message.createdTime)}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};
export default ChatsPage;
