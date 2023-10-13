import fundoPretoTextura from "../assets/fundoPretoTextura.jpg";

const BackGroundImage = () => {
  return (
    <div className={`bg-cover bg-center bg-no-repeat bg-fixed h-screen`} style={{ backgroundImage: `url(${fundoPretoTextura})` }}>
      
    </div>
  );
};

export default BackGroundImage;