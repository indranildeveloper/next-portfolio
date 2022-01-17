const SkillItem = ({ skill }) => {
  const { name, description, icon } = skill;

  return (
    <div className="border border-gray-900 bg-gray-900 p-4 rounded-md shadow-xl">
      <div className="text-8xl text-blue-500">{icon}</div>
      <h1 className="text-4xl font-semibold my-4 opacity-70">{name}</h1>
      <p className="text-xl opacity-70">{description}</p>
    </div>
  );
};

export default SkillItem;
