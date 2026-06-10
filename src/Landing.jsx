import './index.css'

export default function Landing() {
  return (
    <>
      <header className='px-10 py-5'>
        <h1 className='text-lg font-bold'>abdl<span className='text-amber-400'>.</span>mlk</h1>
      </header>
      <section className='flex flex-col gap-10 items-center justify-center text-center h-full'>
        <img src="/src/assets/me.jpg" className='absolute size-50 object-cover object-bottom mb-25 rounded-tl-[70px] rounded-tr-[130px] rounded-br-2xl rounded-bl-[120px]' alt="" />

        <h1 className='px-10 flex flex-col w-120 items-center justify-center text-[20vh]/[90%] tracking-tighter font-bold'>
          <span className="bg-transparent group w-1/3 flex justify-center gap-1 hover:font-bold transition-all duration-300 *:transition-all *:duration-300">
            <p className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{'<'}</p>
              Albar
            <p className="translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{'>'}</p>
          </span>
          <span className="bg-transparent group w-1/3 flex justify-center gap-1 hover:font-bold transition-all duration-300 *:transition-all *:duration-300">
            <p className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{'<'}</p>
              Abdul
            <p className="translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{'>'}</p>
          </span>
          <span className="bg-transparent group w-1/3 flex justify-center gap-1 hover:font-bold transition-all duration-300 *:transition-all *:duration-300">
            <p className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{'<'}</p>
              Malik
            <p className="translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{'>'}</p>
          </span>
        </h1>

        <p className='w-[40%] text-zinc-400 text-xs uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque commodi eius magni mollitia possimus neque nisi. Natus, perspiciatis assumenda expedita, enim inventore at, nobis ipsum repellat dolorum totam fuga!</p>

        <div className='flex items-center gap-2'>
          <button className="relative px-4 py-1 rounded-lg border-x-2 border-white/80 bg-amber-400 text-black font-bold cursor-pointer hover:px-5 transition-all duration-300 text-sm uppercase">
            Get in Touch
          </button>
          <button className="px-4 py-1 rounded-lg border-x-2 border-white/30 text-white font-bold cursor-pointer hover:px-5 transition-all duration-300 text-sm uppercase">
            View Projects
          </button>
        </div>
      </section>
      <footer className='px-10 py-5 flex justify-between text-sm uppercase'>
        <p className='flex items-center'>Copy<span className='group flex flex-col h-6 overflow-hidden'><span>right</span><span>wrong</span></span> 2025 &copy; byme</p>
        
        <ul className='flex items-center gap-10'>
          <li><a href="#">GH</a></li>
          <li><a href="#">LN</a></li>
          <li><a href="#">IG</a></li>
        </ul>
      </footer>
    </>
  )
}
