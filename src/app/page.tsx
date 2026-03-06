import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (o if the middleware somehow allows it)
// Its goal is to redirect to the default locale.

export default function RootPage() {
    redirect('/es');
}
