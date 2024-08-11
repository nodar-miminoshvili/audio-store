const SignupButton = () => {
  return (
    <a
      href="/api/auth/signup"
      className="text-[var(--accent-clr)] px-3 border border-[#ffffff80] py-[5px] rounded-lg 
      transition-colors hover:border-white"
    >
      Sign up
    </a>
  );
};

export default SignupButton;
