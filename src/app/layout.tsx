import type { Metadata } from 'next';

import { Providers } from '@/components';

export const metadata: Metadata = {
  title: 'YouTube',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
