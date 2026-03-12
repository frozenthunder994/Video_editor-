"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, LogIn, UserPlus, Github, Chrome } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="auth-header">
          <Link href="/" className="auth-logo">
            THE <span>EDITOR</span>
          </Link>
          <h1>{isLogin ? "Welcome Back" : "Join the Craft"}</h1>
          <p>{isLogin ? "Sign in to your visual workspace" : "Create your account to start collaborating"}</p>
        </div>

        <form onSubmit={handleEmailAuth} className="auth-form">
          <div className="input-group">
            <Mail className="input-icon" size={18} />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <Lock className="input-icon" size={18} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-primary auth-submit" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <button onClick={handleGoogleSignIn} className="btn-google">
          <Chrome size={20} />
          Continue with Google
        </button>

        {error && <motion.p className="auth-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.p>}

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create one" : "Sign in instead"}
          </button>
        </p>
      </motion.div>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cream);
          padding: 2rem;
          position: relative;
        }

        .auth-card {
          background: white;
          width: 100%;
          max-width: 440px;
          padding: 3.5rem 2.5rem;
          border: 1px solid var(--line);
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          position: relative;
          z-index: 10;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-logo {
          font-family: var(--font-syne), sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          display: block;
        }

        .auth-logo span { color: var(--gold); }

        .auth-header h1 {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: var(--muted);
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--muted);
        }

        .input-group input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid var(--line);
          background: #fcfbf9;
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .input-group input:focus {
          outline: none;
          border-color: var(--gold);
          background: white;
        }

        .auth-submit {
          width: 100%;
          margin-top: 1rem;
        }

        .auth-divider {
          text-align: center;
          position: relative;
          margin: 2rem 0;
        }

        .auth-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--line);
          z-index: 1;
        }

        .auth-divider span {
          background: white;
          padding: 0 1rem;
          position: relative;
          z-index: 2;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--muted);
        }

        .btn-google {
          width: 100%;
          background: white;
          border: 1px solid var(--line);
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-google:hover {
          background: #fcfbf9;
          border-color: var(--muted);
        }

        .auth-error {
          color: var(--rust);
          font-size: 0.85rem;
          margin-top: 1.5rem;
          text-align: center;
        }

        .auth-switch {
          margin-top: 2.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: var(--muted);
        }

        .auth-switch button {
          background: none;
          border: none;
          color: var(--ink);
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
          padding-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}
