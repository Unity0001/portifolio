const SubTitle = ({ labelText, styleText }) => {
    return (
        <p className={`text-xl md:text-2xl leading-relaxed max-w-2xl ${ styleText }`}>{ labelText }</p>
    );
}

export default SubTitle;