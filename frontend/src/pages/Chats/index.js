import SendMessage from "../../components/SendMessage";
import Header from "../../components/Header";

const ChatsPage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen my-2 mb-20">
        <div className="mx-auto w-full h-full">
          <div className="relative overflow-hidden h-full">
            <div className="mb-8 flex sm:flex-row-reverse justify-start sm:justify-around items-center w-full">
              <div className="sm:w-5/12"></div>
              <div className="rounded-md bg-chat-smooth-white shadow-md w-[250px] sm:w-5/12 px-4 py-4 text-[14px] mx-5">
                <div className="mb-3 font-bold text-red-kazoku">Username</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit quo similique maxime necessitatibus veniam incidunt!
                  Doloremque provident, praesentium saepe veniam sequi
                  temporibus quo ea error voluptatem quisquam iure tempore aut!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full h-full">
          <div className="relative overflow-hidden h-full">
            <div className="mb-8 flex items-center justify-end sm:justify-around w-full">
              <div className="sm:w-5/12"></div>
              <div className="rounded-md bg-chat-green text-white shadow-md w-[250px] sm:w-5/12 px-4 py-4 text-[14px] mx-5">
                <div className="mb-3 font-bold text-red-kazoku">Username</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit quo similique maxime necessitatibus veniam incidunt!
                  Doloremque provident, praesentium saepe veniam sequi
                  temporibus quo ea error voluptatem quisquam iure tempore aut!
                </div>
              </div>
            </div>
          </div>
        </div>

        <SendMessage />
      </div>
    </div>
  );
};
export default ChatsPage;
