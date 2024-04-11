import { IoMdArrowRoundUp } from "react-icons/io";

const SendMessage = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed bottom-0 w-[95%] mb-5">
        <input
          className="shadow-sm border bg-chat-smooth-white border-gray-300 text-gray-900 text-md block w-full rounded-full py-2 pl-5 pr-14 h-12 focus:outline-none sm:text-sm"
          placeholder="Message here..."
          type="text"
          name="messages"
        />
        <div className="absolute inset-y-0 right-0 flex items-center bg-chat-green rounded-full m-1 p-[12px] cursor-pointer">
          <IoMdArrowRoundUp color="white" />
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
