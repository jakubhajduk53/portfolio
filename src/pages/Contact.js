import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div
      id="contact"
      className="grid content-center justify-items-center w-full h-screen "
    >
      <div className="grid justify-items-center">
        <div className="text-xl md:text-3xl select-none">Contact</div>
        <div className="flex items-center text-lg md:text-xl select-none">
          <AiOutlinePhone /> 509 778 233
        </div>
        <a
          href="mailto:jakubhajduk53@gmail.com"
          className="flex items-center text-lg md:text-xl hover:text-blue-700"
        >
          <AiOutlineMail /> jakubhajduk53@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
