import { redirect } from 'next/navigation';

// Root page redirects to default locale
// This is necessary for static exports on GitHub Pages
// since middleware doesn't run on static hosting
export default function RootPage() {
  redirect('/en');
}
