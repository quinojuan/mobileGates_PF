import emailjs from "emailjs-com";
import React from 'react';
import Swal from "sweetalert2";

export default function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_jzmq28i', e.target, '4RP4sjyCyb3MSOEae')

            .then((result) => {
                Swal.fire("Mensaje enviado con éxito! 👍");

            }, (error) => {
                Swal.fire("No se pudo enviar el mensaje")

            });
        e.target.reset()


    }
    return (
        <div>
            <div className="container">
                <h2>Contato</h2>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">

                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Nombre</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Tu Nombre" name="name" />
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                            <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Tu email" name="email" />
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                            <label>Mensaje</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Escríbenos" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

