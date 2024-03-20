export function CardTemplate({ children }) {
  return (
    <div className={`bg-yellow-200 p-4 md:p-10 rounded-md `}>{children}</div>
  );
}

export default CardTemplate;
