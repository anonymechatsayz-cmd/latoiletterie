import { redirect } from 'next/navigation';

export default function Page() {
  // Redirige vers le fichier HTML statique demandé, hébergé dans /public
  redirect('/index.html');
}
