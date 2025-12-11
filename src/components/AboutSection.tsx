const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-sand-200 mt-16">
      <div className="container mx-auto max-w-10xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-luckiest text-crimson-800 mb-8">
              About Me
            </h2>
            <div className="prose prose-lg text-brown-700 space-y-4 text-left">
              <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                My name is João Henrique, and I believe that technology can
                transform realities and shape the future. I aim to build
                solutions that make a positive impact on people's lives,
                optimize processes, and deliver innovation always with purpose,
                quality and impact. I wants to inspire and support those who are
                starting their career in technology, and also learn and grow
                from my colleagues and mentors to become the best version of
                myself.
              </p>

              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                I am a Computer Engineer graduated from Engineering College of
                Sorocaba (FACENS) and about to finish my postgradute
                specialization in Software Architecture from Engineering College
                of Sorocaba. I am a developer passionate about creating,
                improving and learning new things, the combination of these with
                strategic thinking i am able to deliver scalable and reliable
                solutions.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                I have over 3 years of experience as a developer, primarily
                focused on front-end development with Vue.js, but also with
                knowledge building API's in Java using the Spring Boot
                ecosystem. I also contributed to database migrations in SQL, API
                integrations, workflow automations and documentation of
                projects.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                I am a team player and a fast learner, in my first year of
                internship i was recognized for proposing the refactoring and
                modernization of the company's legacy systems using the concept
                of responsive design, resulting in increased demand for new
                projects. In that time i was also responsible for the new
                front-end patterns and best practices.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                My professional drive goes to beyond code. I want to contribute
                to projects that impact people, companies and communities. I am
                commited to continuous growth and development myself, whether by
                learning new technologies, improving my communication skills, or
                exploring creative solutions. My purpose is to grow, build, and
                collaborate in shaping a more innovative and efficient
                environment.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-5 animte-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="group realtive overflow-hidden rounde-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/images/huawei-part.jpeg"
                alt="Huawei partners"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* <div className="group relative overflow-hidden rounded-2xl shadouw-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div> */}
            {/* <div className="group realtive overflow-hidden rounde-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group realtive overflow-hidden rounde-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src=""
                alt=""
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
