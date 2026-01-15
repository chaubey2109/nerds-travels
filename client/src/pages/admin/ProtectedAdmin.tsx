import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function ProtectedAdmin({
  children,
}: {
  children: JSX.Element;
}) {
  const [, setLocation] = useLocation();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const isAuth = sessionStorage.getItem("ADMIN_AUTH");

    if (!isAuth) {
      // ❌ not logged in → force login
      setLocation("/admin/login");
    } else {
      // ✅ logged in → allow admin
      setAllowed(true);
    }
  }, [setLocation]);

  // jab tak check na ho, kuch render mat karo
  if (!allowed) return null;

  return children;
}
