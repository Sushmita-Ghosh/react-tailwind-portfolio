import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <section className="mt-10 p-5 md:p-7 text-sm md:text-md  flex justify-center items-center bg-gradient-to-r from-purple-400 to-pink-400 text-center ">
      <div className="w-[70%] flex flex-col  md:flex-row md:justify-between gap-3 items-center">
        <div className="flex gap-3 items-center">
          <h2 className="font-burtons">Contact Me:</h2>
          <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=userid@gmail.com&tf=1">
            <CgMail className="w-5 h-5 cursor-pointer" />
          </a>
        </div>

        <div>
          <h2 className="font-burtons">Made with ❤️ by Sushmita</h2>
        </div>

        <a href="https://www.freepik.com/free-ai-image/beautiful-anime-portrait-new-year-s-eve_94942599.htm#page=12&query=anime%20girl%20with%20glasses&position=37&from_view=keyword&track=ais&uuid=93347a36-3e4e-448c-ba9b-8069feb19eac">
          <span className="font-burtons">Image By freepik</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
