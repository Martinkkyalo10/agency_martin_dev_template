export default {
  name: "registerForm",
  title: "Register Form",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Form Title",
      type: "string",
      initialValue: "Create an Account",
    },
    {
      name: "fields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "formField",
          name: "formField",
        },
      ],
      initialValue: [
        {
          name: "name",
          label: "Full Name",
          type: "text",
          placeholder: "Enter your full name",
          required: true,
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email",
          required: true,
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Create a password",
          required: true,
        },
        {
          name: "confirmPassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "Confirm your password",
          required: true,
        },
      ],
    },
    {
      name: "submitButton",
      title: "Submit Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          initialValue: "Register",
        },
      ],
    },
    {
      name: "loginPrompt",
      title: "Login Prompt",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Prompt Text",
          type: "string",
          initialValue: "Already have an account?",
        },
        {
          name: "linkText",
          title: "Link Text",
          type: "string",
          initialValue: "Login here",
        },
        {
          name: "url",
          title: "URL",
          type: "string",
          initialValue: "login.html",
        },
      ],
    },
  ],
};
