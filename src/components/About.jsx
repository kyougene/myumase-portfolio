import { useEffect } from "react";
import Navbar from './Navbar';
import "../background.css";
import Footer from './Footer';

const activities = [
  { year: "2024", description: "Narita International Airport 壁画" },
  { year: "2024", description: "JR上野駅仮囲いアートイベント" },
  { year: "2024", description: "First Solo Exhibition 表参道" },
  { year: "2024", description: "NYC・Creston 壁画 ライブペイント" },
  { year: "2023", description: "名古屋・マリオットホテル 金魚の舞 ロビーアート作品デザイン" },
  { year: "2023", description: "浅草・ホテルKANZASHI パッケージデザイン" },
  { year: "2023", description: "Los Angeles 留学" },
  { year: "2023", description: "宮城県・Patisserie Promenade バレンタインボックスデザイン" },
  { year: "2023", description: "NY留学" },
  { year: "2022", description: "静岡県・S1 shop 自販機デザイン" },
  { year: "2022", description: "ロサンゼルス・The Inconvenience Store にてオリジナルTシャツ販売" },
  { year: "2022", description: "宮城県・Patisserie Promenade ロゴデザイン、パッケージデザイン" },
  { year: "2022", description: "沖縄渡嘉敷島・ペンションニライカナイ 壁画" },
  { year: "2022", description: "表参道・NewMake Labo ライブペインティング イベント開催" },
  { year: "2022", description: "新大久保・韓国食堂&カフェLuna カフェ店内壁画" },
  { year: "2021", description: "新大久保・韓国食堂&カフェLuna 階段壁画" },
  { year: "2020", description: "Under Water Creator ロゴデザイン" },
  { year: "2020", description: "小笠原諸島オリジナルマスクデザイン" },
  { year: "2020", description: "コロナ禍でオリジナルマスク販売、結婚式サイトハナユメに掲載" },
  { year: "2020", description: "台湾エステ会社Bonjomayの化粧品パッケージデザイン" },
  { year: "2019", description: "第46回近代日本美術協会展に入選" },
  { year: "2016", description: "自己流で絵を描き始める" },
]

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ABOUT | MYUMASE";
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-40 px-4 md:px-8 mb-12 flex flex-col items-center">
        <div style={{
              "fontFamily":  'Katibeh, serif'
            }} className="flex flex-col w-full max-w-4xl items-center rounded-lg">
          <img className="max-w-md w-full rounded-lg mb-4" src="/hero/profile.JPG" alt="Profile" />
          <div className="mt-4 w-full">
          <h2 className="text-3xl text-center font-bold mb-4 tracking-wide" style={{ fontFamily: "'Libre Baskerville', serif" }}>MYUMASE</h2>
          <p className="text-gray-800 text-lg leading-loose tracking-wider">
            東京を拠点に活動、2019年から独学で活動を始める。植物や自然を主なモチーフにし、緻密な線と鮮やかな色彩で作品を制作している。素直な感情を込め、見た人の気持ちを明るくするような作品作りに励んでいる。現在は、活動範囲をニューヨークなど海外にも広げ壁画やパッケージデザインなども手がけている。
          </p>
          <p className="text-gray-800 text-lg leading-loose tracking-wider mt-8">
            Based in Tokyo, Japan, I began working as a self-taught artist in 2019. Using plants and nature as my main motifs, I create works with precise lines and vivid colors. I strive to create artwork that is filled with honest emotion and brightens the feelings of those who see it. Currently, I am expanding my activities internationally, including New York and Los Angeles.
          </p>
        </div>

        </div>

        {/* Activity Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h3 className="text-xl font-semibold mb-6 text-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>Activity</h3>
          <div className="divide-y divide-gray-400">
            {activities.map((activity, index) => (
              <div key={index} className="flex py-3 text-gray-800">
                <span className="w-16 shrink-0 font-medium">{activity.year}年</span>
                <span className="ml-4">{activity.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
