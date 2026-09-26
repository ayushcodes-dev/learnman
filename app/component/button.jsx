export function Button({ text, onClick, className , style}) {
    if(style)
  return (
    <button
      className={`bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-2xl w-xl py-3 text-xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}   