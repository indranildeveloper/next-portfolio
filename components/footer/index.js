const dateYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t-2 opacity-60 p-10">
      <div className="container mx-auto text-center">
        <div className="text-lg">
          Designed and Developed by Indranil Halder <br /> Copyright &copy;{" "}
          {dateYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
