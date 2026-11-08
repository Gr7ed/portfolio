import emailjs from "@emailjs/browser";

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactMessage(values: ContactMessage) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    window.location.href = `mailto:suhail142176@gmail.com?subject=${encodeURIComponent(
      `Portfolio message from ${values.name}`,
    )}&body=${encodeURIComponent(`${values.message}\n\nReply to: ${values.email}`)}`;
    return false;
  }

  await emailjs.send(serviceId, templateId, values, { publicKey });
  return true;
}
