export enum NewsletterStatus {
  Subscribed = "Subscribed",
  Unsubscribed = "Unsubscribed",
}

export interface User {
  id: string;
  name: string;
  email: string;
  newsletterStatus: NewsletterStatus;
}

export interface NewsletterData {
  subject: string;
  content: string;
  callToAction: {
    label: string;
    link: string;
  };
}

export interface SubscriptionData {
  name: string;
  email: string;
}
