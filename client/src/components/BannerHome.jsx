const BannerHome = () => {
  return (
    <div className="w-full h-[20rem] lg:h-auto relative">
      <div className="absolute h-full w-[20rem] flex flex-col justify-center gap-4 pl-5">
        <div className="text-3xl font-serif text-[#e8b941] lg:text-6xl">Donating</div>
        <div className="text-5xl lg:text-8xl">FOOD TOGETHER</div>
        <div className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis</div>
      </div>
      <img src="/src/assets/Images/Banner/SharePlateBannerImage.png" alt="" className="hidden lg:block lg:w-full"/>
    </div>
  )
}
export default BannerHome