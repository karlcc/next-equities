import { env } from '@/env.mjs';

const siteurl = env.NEXT_PUBLIC_SITE_URL;
const googleverid = env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID;
export const siteConfig = {
  name: 'next-equities',
  description: 'next-equities',
  keywords: ['next-equities', 'Next.js', 'React'],
  url: siteurl || 'https://next-equities.vercel.app',
  googleSiteVerificationId: googleverid || '',
};
