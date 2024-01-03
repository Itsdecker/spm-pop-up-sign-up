import Header from '@/components/Header';
import './globals.scss';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'SPM Onboarding Form',
  description: 'The onboarding form for clients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground'>
        <Header />
        <main className='min-h-screen bg-neutral-50'>
          <div className="container py-6 mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
