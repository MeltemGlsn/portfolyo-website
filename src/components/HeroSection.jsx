import profileImage from '../assets/profile.png';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Metin Kısmı */}
      <div className="md:w-2/3 space-y-5">
        <p className="text-gray-800 text-lg">Hi! 👋</p>
        <h1 className="text-3xl font-bold text-gray-900 leading-relaxed">
          I'm <span className="text-pink-600 underline decoration-pink-600 decoration-8">Meltem</span>.<br />
          I’m a full-stack developer. I can craft solid and scalable frontend products.<br />
          Let’s meet!
        </h1>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:underline font-medium">GitHub</a>
          <a href="#" className="hover:underline font-medium">Email</a>
        </div>
      </div>

      {/* Profil Fotoğrafı */}
      <div className="rounded-[24px] border-[12px] border-pink-500 overflow-hidden w-60 h-60">
        <img
          src={profileImage}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;
