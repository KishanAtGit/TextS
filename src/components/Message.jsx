export default function Message({ message }) {
  return (
    <div className='message'>
      {message.map((text, index) => {
        return <li key={index}>{text}</li>;
      })}
    </div>
  );
}
