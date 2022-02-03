const Title = ({ title, icon }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 text-2xl md:text-3xl">
        {icon}
        <h1 className="font-semibold">{title}</h1>
      </div>
      <div className="h-2 w-64 my-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-700"></div>
    </div>
  );
};

export default Title;
