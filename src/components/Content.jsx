// eslint-disable-next-line react/prop-types
export default function Content({ contentClass, children }) {
  return (
    <div
      id="content"
      className={`glass-container content animate__animated ${contentClass}`}
    >
      {children}
    </div>
  );
}
