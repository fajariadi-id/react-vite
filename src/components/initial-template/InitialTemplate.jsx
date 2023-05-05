import logo from "../../assets/icons/logo.svg";

const InitialTemplate = ({ display }) => {
  return (
    <header className="flex flex-col items-center">
      <img
        src={logo}
        className="h-[40vmin] pointer-events-none animate-floating_logo"
        alt="logo"
      />

      {display}

      <p className="mt-[50px]">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="text-[#704cb6] underline decoration-solid"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="text-[#704cb6] underline decoration-solid"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="text-[#704cb6] underline decoration-solid"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="text-[#704cb6] underline decoration-solid"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  );
};

export default InitialTemplate;
