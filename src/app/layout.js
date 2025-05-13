
export const metadata = {
  title: 'adibell.dev',
  description: 'Adithya Bellamkonda portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
