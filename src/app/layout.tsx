import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@core/styles/index.css';
import { ThemeProvider } from '@core/providers/ThemeProvider';
import { GlassNavbar } from '@core/components/layout/Navbar/GlassNavbar';
import { Footer } from '@core/components/layout/Footer/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'bas. — Personal Portfolio & Engineering Writing',
  description:
    'Senior Frontend Engineer & Design Systems Architect portfolio. Showcasing engineering excellence, React/Next.js architecture, and technical writings.',
  metadataBase: new URL('https://bas.co'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg-body transition-colors duration-250">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <GlassNavbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

