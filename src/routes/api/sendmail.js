import sgMail from "@sendgrid/mail";

// @ts-ignore
const pass = process.env.MAIL_PASS
const api = process.env.API_SENDGRID


sgMail.setApiKey(api);

// @ts-ignore
export async function get(page) {
      const msg = {
        to: "info@seo-agency.es",
        from: "info@seo-agency.es",
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
      };
      console.log("Form submitted");
      const output = await sgMail.send(msg);
  return {
    body: output,
  };
}