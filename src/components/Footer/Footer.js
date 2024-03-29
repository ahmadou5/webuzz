export const Footer = () => {
    const link = [
        {name: 'github', url: './discord.svg'},
        {name: 'github', url: './tiktok.svg'},
        {name: 'github', url: './twitter.svg'}
      ]
      const Socials = [
      
        { name: "X", icon: "./twitter.svg" },
        { name: "Telegram", icon: "./tg.svg" },
        { name: "Discord", icon: "./discord.svg" },
       
      ];

      const products = [
      
        { name: "X", icon: "./twitter.svg" },
        { name: "Telegram", icon: "./tg.svg" },
        { name: "Discord", icon: "./discord.svg" },
       
      ];
      
    
      const others = [
        { name: "Careers" },
        { name: "Contact-Us" },
       
      ];
    return (
        <div className="w-[100%]">
        <div className="w-[100%] ml-auto mr-auto "> 
     
        </div>
        <div className="w-full py-7 bg-transparent px-7 ml-auto mr-auto h-64 lg:ml-14 lg:mr-16 flex items-center">
          <div
            className="w-[90%] h-64 ml-5 "
            
          >
            <div className="font-extrabold mb-4 text-yellow-500/70">Socials</div>
            {Socials.map((social, index) => (
              <div key={index}>{social.name}</div>
            ))}
          </div>
          <div
            className="w-[90%] h-64  "
            
          >
            <div className="font-extrabold mb-4 text-yellow-500/70">Features</div>
            {products.map((product, index) => (
              <div key={index}>{product.name}</div>
            ))}
          </div>
          
          <div
            className="w-[90%] h-64 mr-2 "
           
          >
            <div className="font-semibold mb-4 text-yellow-500/70">Others</div>
            {others.map((product, index) => (
              <div key={index}>{product.name}</div>
            ))}
          </div>
        </div>
        <div className="mb-[10px] lg:mb-3 ml-6 flex flex-row font-semibold">
          <p className="w-[45%] ">
            © {new Date().getFullYear()} WeBuzz
          </p>
          <div  className="w-[15%] ml-auto mr-16 flex flex-row">
          { /** link.map((links, i) => (
            <img key={i}  className="w-6 h-6 ml-1 mr-1" src={`./${links.url}`} />
          ))
          **/}
          </div>
          
        </div> 
      </div>
    )
}