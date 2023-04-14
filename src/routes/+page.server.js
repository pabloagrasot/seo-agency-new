// @ts-nocheck
import { fail, redirect } from '@sveltejs/kit'
import sgMail from "@sendgrid/mail";
let api = process.env.API_SENDGRID
sgMail.setApiKey(api);

export const actions = {
    contactus: async ({request}) => {
    const data = await request.formData();
    const name =  data.get("name")
    const phone =  data.get("phone")
    const email =  data.get("email")
    const subjet =  data.get("subjet")
    const message =  data.get("message")
    

    const msg = {
          to: 'info@seo-agency.es', // Change to your recipient
        from: 'info@seo-agency.es', // Change to your verified sender
        subject: `${subjet} | SEO Agency`,
        text: 'and easy to do anywhere, even with Node.js',
        html: `<p>Nombre: ${name}<p>
               <p>Teléfono: ${phone}<p>
               <p>Email: ${email}<p>
               <p>Mensaje: ${message}<p>`,
      }
        const responseSendMail =  await sgMail.send(msg)
        const status = responseSendMail[0].statusCode
        if (status === 202){
          throw redirect(303, '/gracias')
        } else {
          alert("El correo no se ha podido enviar, revisa los campos o intentalo más tarde")
        }

}
}

 