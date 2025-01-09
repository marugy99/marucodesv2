const Codepen = ({ url }) => {
  return (
    <iframe
      height="450"
      style={{ width: "100%", maxWidth: "100%" }}
      title="CodePen Embed"
      src={url}
      allowtransparency="true"
      allowFullScreen
    />
  );
};

export default Codepen;
