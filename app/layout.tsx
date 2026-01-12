import "./globals.css";

// Minimal root layout - locale layout handles everything else
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

