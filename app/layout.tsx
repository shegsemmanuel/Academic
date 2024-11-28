import "./globals.css";

export const metadata = {
  title: "Ei Courses",
  description: "Ei Courses Improve your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
