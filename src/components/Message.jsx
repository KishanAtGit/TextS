export default function Message({ message }) {
  return (
    <>
      {message.map((text, index) => {
        return <li key={index}>{text}</li>;
      })}
    </>
  );
}
