import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Lock, Mail, ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [, setLocation] = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin() {
  setError("");

  if (username === "nerds_admin" && password === "nerdsup65") {
    sessionStorage.setItem("ADMIN_AUTH", "true");
    setLocation("/admin");
  } else {
    setError("Invalid admin credentials");
  }
}


  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      {/* ✨ Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />

      {/* 🔐 Login Card */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
            <ShieldCheck className="text-white w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            Nerds Travel Admin
          </h1>
          <p className="text-white/70 text-sm mt-1">
            Login required every time
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 text-center">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="mb-4">
          <label className="text-sm text-white/80 mb-1 block">
            Admin Username
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="admin@nerdstravel.in"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-white/80 mb-1 block">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 rounded-xl bg-black/40 text-white border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* 👁️ Show / Hide */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <Button
          onClick={handleLogin}
          className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600
                     text-white font-semibold text-base shadow-lg transition-transform hover:scale-[1.02]"
        >
          Secure Login
        </Button>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-white/50">
          Authorized personnel only • © Nerds Travel
        </p>
      </div>
    </div>
  );
}
