import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="Briefly-logo"
          className="w-28 object-contain z-50"
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ajanaku1/briefly.git")}
          className="git_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with Briefly
        <br className="sm-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Briefly. An open-source article summarizer
        that turns lengthy articles into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
