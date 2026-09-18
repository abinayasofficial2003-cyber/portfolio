export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ContactFormFields = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  url?: string;
  services?: string[];
};

export const isValidContactName = (name: string): boolean => {
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 200;
};

export const isValidContactEmail = (email: string): boolean => {
  const trimmed = email.trim();
  return trimmed.length <= 100 && Boolean(trimmed.toLowerCase().match(EMAIL_REGEX));
};

export const isValidContactMessage = (message: string): boolean => {
  const trimmed = message.trim();
  return trimmed.length >= 5 && trimmed.length <= 2000;
};

export const validateContactForm = ({
  name,
  email,
  message,
}: ContactFormFields): string | null => {
  if (!isValidContactName(name)) {
    return "Please enter a valid name (at least 2 characters).";
  }

  if (!isValidContactEmail(email)) {
    return "Please enter a valid email address.";
  }

  if (!isValidContactMessage(message)) {
    return "Please enter a message or requirement description (at least 5 characters).";
  }

  return null;
};
