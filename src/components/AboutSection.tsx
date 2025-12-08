const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-sand-200 mt-16">
      <div className="container mx-auto max-w-10x1">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4x1 lg:text-5x1 font-luckiest text-brown-800 mb-8"
            >About Me</h2>
            <div className="prose prose-lg text-brown-700 space-y-4">
              <p className="animate-fade-in" style={ { animationDelay: "0.1s" } }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                veniam neque. Neque quisquam aperiam quam sunt natus. Nihil
                provident magnam quidem pariatur quasi, itaque, amet fugiat
                distinctio iste rerum culpa.
              </p>

              <p className="animate-fade-in" style={ { animationDelay: "0.2s" } }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                exercitationem. Consequatur suscipit alias nostrum optio amet.
                Quam amet recusandae harum commodi dolor deserunt aliquam, fuga
                aliquid minima repellendus eum accusantium?
              </p>
              <p className="animate-fade-in" style={ { animationDelay: "0.3s" } }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                exercitationem. Consequatur suscipit alias nostrum optio amet.
                Quam amet recusandae harum commodi dolor deserunt aliquam, fuga
                aliquid minima repellendus eum accusantium?
              </p>
              <p className="animate-fade-in" style={ { animationDelay: "0.4s" } }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                exercitationem. Consequatur suscipit alias nostrum optio amet.
                Quam amet recusandae harum commodi dolor deserunt aliquam, fuga
                aliquid minima repellendus eum accusantium?
              </p>
              <p className="animate-fade-in" style={ { animationDelay: "0.5s" } }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                exercitationem. Consequatur suscipit alias nostrum optio amet.
                Quam amet recusandae harum commodi dolor deserunt aliquam, fuga
                aliquid minima repellendus eum accusantium?
              </p>
            </div>  
          </div>
          <div className="flex flex-col gap-5 animte-slide-up" style={ { animationDelay: "0.3s" } }>
            <div className="group realtive overflow-hidden rounde-2x1 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-x1">
                <img src="" alt="" />
                <div className="w-full h-48 obejct-"></div>
            </div>
             <div className="">
                <img src="" alt="" />
                <div className=""></div>
            </div>
             <div className="">
                <img src="" alt="" />
            </div>
             <div className="">
                <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
