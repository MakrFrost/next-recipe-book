export default function Head({ title }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Find you favourite cocktails by ingridient!"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://fav-gen.com/public/assets/img/emoji/svg/1f379.svg"
      ></link>
    </>
  );
}
