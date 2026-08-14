export const metadata = {
  title: "SHEMA",
  description: "Frontend SHEMA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
