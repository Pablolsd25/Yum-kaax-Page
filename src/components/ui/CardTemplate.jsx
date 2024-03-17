export function CardTemplate({ children }) {
  return (
    <div className={`bg-yellow-200 p-5 md:p-10 rounded-md `}>{children}</div>
  );
}

export default CardTemplate;
