import Footer from "../../components/Footer";

const WelcomeChatsPage = () => {
  const handleSubmit = (e) => {
    console.log("submit");
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen">
        <div className="w-full flex flex-col justify-center items-center px-10 sm:px-16 py-16 sm:w-1/3">
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <label className="block mb-10 text-3xl lg:text-4xl font-bold text-black ">
              Join Chatroom
            </label>
            <div className="w-full mb-6">
              <input
                className="shadow-sm border bg-chat-smooth-white border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 focus:outline-none"
                placeholder="Username"
                name="username"
                required
                //   onChange={onChange}
              />
            </div>
            <div className="w-full mb-6">
              <input
                type="text"
                placeholder="Room ID"
                className="shadow-sm border bg-chat-smooth-white border-gray-300 text-gray-900 text-md rounded-md block w-full p-2 focus:outline-none"
                name="roomid"
                required
                //   onChange={onChange}
              />
            </div>
            <button className="font-extrabold text-white bg-chat-green py-3 px-20 sm:px-32 mt-16 rounded-full cursor-pointer">
              Join
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default WelcomeChatsPage;