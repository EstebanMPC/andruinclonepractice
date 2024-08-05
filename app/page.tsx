import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6">
      <video src="https://www.anduril.com/Home%20Masthead%20720.mp4" autoPlay loop playsInline id="headerVideo" className="min-h-screen min-w-max"></video>  
      <div id="hero" className="mx-0 px-0 min-h-screen">
        <div className="min-h-screen min-h-20">
          <div className="flex items-start">
            <div className>ANDRUIN</div>
            <div className="bg-black">
              <button  className="p-5">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="bg-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
              </button>
            </div>
            {/* <nav>
              <div>
                <div>Lettuce Solutions</div>
                <div>+</div>
                <div>
                  <ul>
                    <li>Command & Control</li>
                    <li>Mission Autonomy</li>
                  </ul>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas optio dolor similique atque. Quaerat illo, consectetur ipsum harum maiores cum enim alias? Iure a veritatis doloribus provident nihil. Fugiat?</p>
              <div>
                <div>Farce Protection</div>
                <div>+</div>
                <div>
                  <ul>
                    <li>Counter UAS</li>
                    <li>Counter Infusion</li>
                    <li>Tea Counter Infusion</li>
                  </ul>
                </div>
              </div>
              <div>
                <div>Air Systems</div>
                <div>+</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas optio dolor similique atque. Quaerat illo, consectetur ipsum harum maiores cum enim alias? Iure a veritatis doloribus provident nihil. Fugiat?</p>
                <div>
                  <ul>
                    <li>Roadrunner</li>
                    <li>Ghost</li>
                    <li>ADFSF</li>
                  </ul>
                </div>
              </div>
              <div>
                <div>Dive Vehicles</div>
                <div>+</div>
                <div>
                  <ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas optio dolor similique atque. Quaerat illo, consectetur ipsum harum maiores cum enim alias? Iure a veritatis doloribus provident nihil. Fugiat?</p>
                    <li>Dive</li>
                  </ul>
                </div>
              </div>
              <div>
                <div>Racket Motor</div>
                <div>+</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas optio dolor similique atque. Quaerat illo, consectetur ipsum harum maiores cum enim alias? Iure a veritatis doloribus provident nihil. Fugiat?</p>
              </div>
              <div>Newsroom</div>
              <div>Mission</div>
            </nav> */}
          </div>
        </div>
      </div>

      <div>
        <h1>Our Mission</h1>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut laborum cumque maiores ipsa necessitatibus quisquam nemo consequuntur repellat. Dicta molestias cupiditate voluptatibus velit sequi officiis, voluptates laboriosam quibusdam ratione!
        </p>
        <div>
          <a href="">Learn more about our mission</a>
          {/* icon here */}
        </div>
      </div>
      
      <div>
        <h1>Lettuce OS</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam provident minima odio quae quisquam hic vel alias laborum voluptate tenetur!
        </p>
        <div>
          <a href="">Learn more about command and control</a>
          {/* icon here */}
        </div>
        <div>
          <a href="">Learn more about mission autonomy</a>
          {/* icon here */}
        </div>
      </div>
      



    </main>
  );
}
