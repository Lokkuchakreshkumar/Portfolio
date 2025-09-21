export default function Code() {
  return (
    <section id="about" className="w-full flex flex-col  justify-center sm:p-5 text-lg mt-80 sm:mt-40">
      <div className="sm:text-7xl text-5xl ml-12 mr-auto bg-clip-text bg-linear-to-r from-white to-blue-600 text-transparent">
        About <span className="text-blue-600">.jsx</span>
      </div>

      <div className="flex justify-center mt-24 sm:p-4 leading-relaxed">
        <div className="sm:w-4/5 w-[90%]   bg-white/5 rounded-3xl">
          <div className="bg-white/10 flex items-center justify-baseline rounded-tr-3xl sm:p-4 rounded-tl-3xl h-12">
            <div className="w-4 h-4 bg-red-500 ml-4 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 ml-4 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 ml-4 rounded-full"></div>
            <div className="text-gray-300 ml-8">~About Chakresh</div>
          </div>

          <div className="flex flex-col  w-full sm:p-4 h-full rounded-bl-3xl rouded-br-3xl text-white">
            <div className="text-green-500 w-full text-ellipsis font-mono truncate max-w-full sm:text-lg mt-4">
              Chakresh/About@chakresh <div className="text-orange-400">$&nbsp;cd About_chakresh</div>
            </div>
            <div className="text-green-500 w-full max-w-full break-words font-mono sm:text-lg mt-4 pr-1">
              Chakresh/About@chakresh/About_chakresh <div className="text-orange-400">$&nbsp;ls</div>
            </div>
            <div className="text-blue-400 font-mono text-lg mt-4">About.txt</div>
            <div className="text-green-500 font-mono sm:text-lg mt-4 break-words">
              Chakresh/About@chakresh/About_chakresh <div className="text-orange-400">$&nbsp;cat About.txt</div>
            </div>

            <div className="flex justify-center sm:text-5xl text-lg  items-center p-4">
              <div className="font-mono text-sm leading-relaxed mt-8 p-4 sm:p-4">
                #Hey, I’m <span className="text-green-400 text-3xl">Chakresh</span> — a 2nd-year B.Tech student at KL University and a <span className="text-yellow-500">MERN stack</span> developer.  

                I build tools that actually help people, like <span className="text-cyan-500">KLED</span> and <span className="text-pink-400">MySkillDex</span>, along with other projects aimed at making life easier and learning smarter.  

                My mission is to create full-stack applications that are useful for society — clean UI, solid backend, AI integration, and automation, all rolled into one.  

                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
                  Building practical software that makes a real difference.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
