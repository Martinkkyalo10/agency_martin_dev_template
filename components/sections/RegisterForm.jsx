"use client";

import { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/ui/FormInput";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="card shadow-lg border-light rounded">
      <div className="card-body">
        <h4 className="card-title text-center mb-4">Create an Account</h4>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
          <div className="mt-3 text-center">
            <p>
              Already have an account? <Link href="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
