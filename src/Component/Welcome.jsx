import React from "react";

const processSteps = [
  {
    title: "900+ projects all over the world",
    text: "We craft location-focused plans that match your market, timeline, and investment goals.",
  },
  {
    title: "Bespoke Design Tailored to You",
    text: "From consultation to concept, every detail is aligned with your lifestyle and brand direction.",
  },
  {
    title: "From Sketch to Launch, We're With You",
    text: "You stay informed through every stage with a practical roadmap and clear delivery flow.",
  },
];

const Welcome = () => {
  return (
    <section className="bg-[#f3f4f6] py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE CARD */}
          <div className="relative bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden border">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvV4q9iiePxuUwQee-10F8ZTYa_vv16s5rw&s"
              className="w-full h-[280px] object-cover"
              alt=""
            />

            <div className="p-6">
              <p className="text-size-14 text-gray-500 leading-6">
                This is one of the most beautiful and functional interiors I've seen.
              </p>

              <div className="flex items-center justify-between mt-5">
                <span className="text-size-12 text-gray-400">
                  Sarah, Homeowner
                </span>
                <span className="text-yellow-400 text-size-14">★★★★★</span>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-lg">
            <h2 className="text-size-36 lg:text-size-48 font-extrabold tracking-tight text-gray-800">
              Welcome for <br />
              <span className="text-green-600">Professionals</span>
            </h2>

            <p className="mt-6 text-gray-500 leading-7">
              We specialize in helping forward-thinking individuals and companies elevate their spaces.
            </p>

            <p className="mt-5 font-semibold text-gray-700">
              Jimmy Kevaly CEO
            </p>

            <button className="mt-6 bg-yellow-400 px-6 py-3 rounded-md text-size-14 font-semibold shadow-md hover:scale-105 transition">
              Read More →
            </button>
          </div>
        </div>

        {/* PROJECT SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="max-w-lg">
            <h2 className="text-size-36 lg:text-size-48 font-extrabold tracking-tight text-gray-800">
              900+ Projects All <br />
              Over the World
            </h2>

            <p className="mt-6 text-gray-500 leading-7">
              From New York to Tokyo, our portfolio spans continents and cultures.
            </p>

            <button className="mt-6 bg-yellow-400 px-6 py-3 rounded-md text-size-14 font-semibold shadow-md hover:scale-105 transition">
              Read More →
            </button>
          </div>

          {/* RIGHT IMAGE COLLAGE (FIXED 🔥) */}
          <div className="relative h-[320px]">

            {/* LEFT BIG */}
            <div className="absolute left-0 top-0 w-[55%] h-full rounded-xl overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6rZQPI77RSfzQh2KdwMf7c5F-lA8ghPIYw&s"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-3 left-3 text-white font-semibold">
                Commercials
              </span>
            </div>

            {/* RIGHT TOP */}
            <div className="absolute right-0 top-0 w-[40%] h-[48%] rounded-xl overflow-hidden">
              <img
                src="/residential.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-2 left-2 text-white text-size-12">
                Residential
              </span>
            </div>

            {/* RIGHT BOTTOM */}
            <div className="absolute right-0 bottom-0 w-[40%] h-[48%] rounded-xl overflow-hidden">
              <img
                src="/kitchen.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-2 left-2 text-white text-size-12">
                Kitchen
              </span>
            </div>

            {/* SLIDER */}
            <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-10 h-[2px] bg-yellow-400"></div>
              <span className="text-size-12 text-gray-600">1 2 3</span>
            </div>

          </div>
        </div>

        {/* WORK PROCESS */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://media.gettyimages.com/id/1146259061/photo/couple-buying-a-couch-at-a-home-improvement-store.jpg?s=612x612&w=gi&k=20&c=VJJsa8klIY-xTTAu6dSN0zFCjTywgEZ4N9YTuHpD0jA="
              className="w-full h-[320px] object-cover"
            />
          </div>

          {/* RIGHT STEPS (FIXED 🔥) */}
          <div>
            <h2 className="text-size-36 lg:text-size-48 font-extrabold tracking-tight text-gray-800">
              Our work process make your dream true
            </h2>

            <div className="mt-8 space-y-6">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-size-14 font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {step.title}
                    </p>
                    <p className="text-gray-500 text-size-14">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Welcome;