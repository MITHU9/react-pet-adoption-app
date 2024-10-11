/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <div>
      <a href="#">
        <button className="font-semibold px-4 py-2 bg-emerald-400  rounded-xl mt-6 hover:bg-slate-400">
          {text}
        </button>
      </a>
    </div>
  );
};
export default Button;
