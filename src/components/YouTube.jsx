const YouTube = ({ id }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      frameborder="0"
      allowfullscreen
      class="w-full aspect-[16/9]"
    ></iframe>
  );
};

export default YouTube;
