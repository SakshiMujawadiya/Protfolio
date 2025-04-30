import backgroundImage from "../assets/Hero.jpg"; 

export default function Hero() {
  return (
    
<section
  id="hero"
  className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
>
  {/* Background Image Layer with Opacity */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.4, 
      zIndex: 0,
    }}
  ></div>
  {/* Gradient Overlay */}
  <div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to bottom, rgba(72, 145, 195, 0.85), rgba(72, 145, 195, 0.85))",
  }}
></div>



  {/* Content */}
  <div className="relative z-10 px-4">
    <h1 className="text-4xl md:text-4xl font-bold uppercase leading-tight">
      Sakshi  Mujawadiya
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mt-4">
      Software Engineer
    </p>
    <a
      href="/resume.pdf"
      download
      className="mt-8 inline-block border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300"
    >
      Download Resume
    </a>
  </div>

  {/* Scroll Icon */}
  <div className="absolute bottom-8 z-10 animate-bounce">
    <a href="#about">
      <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
        <span className="text-white text-xl">&#8595;</span>
      </div>
    </a>
  </div>
</section>

  );
}
