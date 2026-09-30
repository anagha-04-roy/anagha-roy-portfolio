import "./globals.css";

export const metadata = {
  title: "Anagha Roy — Software Developer",
  description:
    "Portfolio of Anagha Roy, a full-stack software developer building web applications and AI-integrated features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
