export default {
  name: "loginForm",
  title: "Login Form",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Form Title",
      type: "string",
      initialValue: "Login to Martin Devs",
    },
    {
      name: "emailLabel",
      title: "Email Label",
      type: "string",
      initialValue: "Email Address",
    },
    {
      name: "passwordLabel",
      title: "Password Label",
      type: "string",
      initialValue: "Password",
    },
    {
      name: "forgotPasswordLink",
      title: "Forgot Password Link",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Link Text",
          type: "string",
          initialValue: "Forgot Password?",
        },
        {
          name: "url",
          title: "URL",
          type: "string",
          initialValue: "forgot-password.html",
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
          initialValue: "Login",
        },
        {
          name: "style",
          title: "Button Style",
          type: "string",
          options: {
            list: ["primary", "secondary", "outline"],
          },
          initialValue: "primary",
        },
      ],
    },
    {
      name: "registerPrompt",
      title: "Register Prompt",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Prompt Text",
          type: "string",
          initialValue: "Don't have an account?",
        },
        {
          name: "linkText",
          title: "Link Text",
          type: "string",
          initialValue: "Register here",
        },
        {
          name: "url",
          title: "URL",
          type: "string",
          initialValue: "register.html",
        },
      ],
    },
  ],
};
