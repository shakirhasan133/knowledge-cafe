import profile from "../images/profile.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-3 border-b-2 items-center">
        <h1 className="font-bold text-2xl">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
