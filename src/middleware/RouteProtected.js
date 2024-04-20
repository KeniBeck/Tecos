import { useRouter } from 'next/navigation';

const RouteProtected = ({children}) => {
  let logged = false;
  const router = useRouter();

  if (typeof window !== 'undefined') {
    logged = sessionStorage.getItem('logged') === 'true';
  }

  if (!logged) {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
    return null;
  }

  return children;
};

export default RouteProtected;