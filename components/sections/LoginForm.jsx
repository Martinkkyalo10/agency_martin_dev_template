"use client";

import { useState } from "react";
import Link from "next/link";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="card shadow-lg border-light rounded">
      <div className="card-body">
        <h4 className="card-title text-center mb-4">Login to Martin Devs</h4>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>
          <Button type="submit" className="btn-primary w-100">
            Login
          </Button>
          <div className="mt-3 text-center">
            <p>
              Don't have an account? <Link href="/register">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
