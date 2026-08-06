function AboutMeCard() {
  return (
    <div className="bg-blue-50 border border-blue-300 p-4 rounded-lg shadow-sm text-sm text-gray-700 w-full md:w-1/2">
      <h3 className="text-blue-600 font-semibold mb-2">About Me</h3>
      <p>
        Full Stack Developer with experience spanning low-code enterprise
        application development and industrial process engineering, now
        specialising in Java/Spring Boot, React, Python and AWS.
      </p>
      <p className="mt-2">
        I built and deployed a production-style AI platform combining
        Machine Learning with a decoupled FastAPI + React architecture on
        AWS, and I'm currently completing an MSc in Computer Science
        (University of Portsmouth) focused on Cloud Computing, Cybersecurity
        and Advanced AI.
      </p>
    </div>
  );
}

export default AboutMeCard;
