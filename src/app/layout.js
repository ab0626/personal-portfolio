export const metadata = {
  title: 'adibell.dev',
  description: 'Adithya Bellamkonda portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
