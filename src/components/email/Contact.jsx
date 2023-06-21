import React, {  useState } from "react";
import emailjs from "@emailjs/browser";

function Contact({showModal,setShowModal}) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) =>{
    setMail("");
    setName("");
    setMessage("");
    setShowModal(e);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_portfolio_inazar",
        "template_ib65p97",
        e.target,
        "5D0Kkl7nEbHrmrp63"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      handleClick(e);
      }

  return (
    showModal &&
    
    <div className=" block absolute bg-black rounded-xl px-24 py-16 text-white opacity-95 ">
        <button onClick={handleClick}>x</button>
          <p className="leading-relaxed mb-5 font-karla" >
            <span>Cualquier duda, devolución o propuesta podés hacerla desde acá</span>
          </p>
          <form onSubmit={sendEmail}>
            <div className="relative mb-6">
              <label className="label-text ">
                <span>Tu nombre </span>
              </label><br/>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Nombre"
                className="input lg:ml-2 text-black input-bordered w-full max-w-xs"
                required
              ></input>
            </div>
            <div className="relative mb-6">
              <label className="label-text">
                <span>Tu mail</span>
              </label> <br/>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered text-black  lg:ml-2 w-full max-w-xs"
                required
              ></input>
            </div>
            <div className="relative mb-4">
              <label className="label-text mb-6 " htmlFor="message">
              <span>Tu mensaje</span>
              </label>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensaje"
                id=""
                name="message"
                className="w-full h-32 resize-none text-black  textarea textarea-primary"
                required
              ></textarea>
            </div>
           
            <button type="submit" className="flex rounded-full mx-auto w-[11rem] h-10 bg-rose justify-center hover:text-black hover:bg-rosedark">
             Enviar
            </button>

          </form>
        </div>
  );
}

export default Contact;