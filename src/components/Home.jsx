import imagen from '../assets/img/ladyimg.png'

function Home(){
    const textStyle = {
      textAlign: "auto",
      marginTop: "20px", 
    };

    return (
      <div className="container-fluid">
        <div className="container-sm">
          <div style={{ textAlign: "auto" }}>
            <a>
              <h1 style={textStyle}>Tu banco universitario comprometido</h1>
              <h1 style={textStyle}>con tu futuro financiero</h1>
              <h1 style={textStyle}>¡Cada dia mas cerca de ti!</h1>
            </a>
          </div>
        </div>
        <div className="container-sm nav justify-content-end">
          <a className="home-brand">
            <img src={imagen} alt="imagen" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
    );
}

export default Home;