const MainText = ({ labelText, styleText, styleh1 }) => {
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-tight ${styleh1}`}>
      <span className={`p-1 block text-slate-800 ${styleText}`}> {labelText}</span>
    </h1>
  );
};

export default MainText;
