import { cookies } from 'next/headers';
import Link from 'next/link';
import Login from './auth/login/page'; // Assuming you have a Login component

export default function Home() {
  const cookieStore = cookies();
  const isLoggedIn = Boolean(cookieStore.get('token'));

  if (isLoggedIn) {
    return null; // This will never be reached due to middleware redirect
  }

  return (
    <div className=" justify-center bg-gray-900 text-white">
    <div className="">
      <Login />
    </div>
  </div>
  );
}
