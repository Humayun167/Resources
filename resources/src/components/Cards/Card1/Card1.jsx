import "./card1.css";
const Card1 = () => {
  return (
    <div>
      <div className="container">
        <div className="custom-card">
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=
        
        crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          <div className="custom-content">
            <h2>Card 1</h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, hic? Magnam eum error saepe doloribus corrupti
              repellat quisquam alias doloremque!
            </p>

            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
