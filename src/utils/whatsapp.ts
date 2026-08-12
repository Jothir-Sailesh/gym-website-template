import { businessConfig } from '../data/business';

export function getWhatsAppLink(customMessage?: string): string {
  const number = businessConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultText = `Hi ${businessConfig.brandName}, I'm interested in starting a training program at your studio. Please share more details.`;
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${number}?text=${message}`;
}

export function getProgramWhatsAppLink(programName: string): string {
  const text = `Hi ${businessConfig.brandName}, I am interested in the ${programName.toUpperCase()} program. Can I get details on schedules and availability?`;
  return getWhatsAppLink(text);
}

export function getTrialWhatsAppLink(): string {
  const text = `Hi ${businessConfig.brandName}, I would like to book a FREE TRIAL training session. Please let me know available time slots.`;
  return getWhatsAppLink(text);
}

export function getFormSubmissionWhatsAppLink(formData: { name: string; phone: string; goal: string; message: string }): string {
  const text = `Hi ${businessConfig.brandName}, I submitted an enquiry via your website:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Goal: ${formData.goal}
• Note: ${formData.message || 'Ready to start training.'}`;
  return getWhatsAppLink(text);
}

export function getPhoneCallLink(): string {
  const cleanPhone = businessConfig.phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanPhone}`;
}
