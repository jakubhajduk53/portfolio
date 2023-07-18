import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div
      id="contact"
      className="grid content-center justify-items-center w-full h-screen bg-blue-100"
    >
      <div className="grid justify-items-center">
        <div className="text-2xl">Contact</div>
        <div className="flex items-center">
          <AiOutlinePhone /> 509 778 233
        </div>
        <div className="flex items-center">
          <AiOutlineMail /> jakubhajduk53@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
