import { Link } from "react-router-dom";

const Header = ({ room }) => {
  return (
    <>
      <div className="flex flex-row justify-around top-0 text-center items-center md:text-sm h-14">
        <Link to={"/"}>
          <div className="text-chat-green cursor-pointer">Exit</div>
        </Link>
        <div className="font-bold">{room}</div>
      </div>
    </>
  );
};

export default Header;
