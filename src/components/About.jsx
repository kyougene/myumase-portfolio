import React from "react";
import Navbar from './Navbar';
import "../background.css";
import Footer from './Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-24 px-2 mb-12 flex flex-col items-center">
        {/* Profile Section */}
        <div style={{
              "fontFamily":  'Katibeh, serif' 
            }} className="flex flex-col lg:w-3/5 items-center rounded-lg">
          <img className="h-[300px] w-[300px] rounded-full mb-4" src="/hero/profile.JPG" alt="Profile" />
          <div className="mt-4 w-3/4">
          <h2 className="text-3xl text-center font-bold mb-4 tracking-wide">MYUMASE</h2>
          <p className="text-gray-800 text-left text-lg leading-loose tracking-wider">
            東京を拠点に活動、2019年から独学で活動を始める。<br />
            植物や自然を主なモチーフにし、緻密な線と鮮やかな色彩で作品を制作している。<br />
            素直な感情を込め、見た人の気持ちを明るくするような作品作りに励んでいる。<br />
            現在は、活動範囲をニューヨークなど海外にも広げ壁画やパッケージデザインなども手がけている。
          </p>
          <p className="text-gray-800 text-lg leading-loose tracking-wider mt-8">
            Based in Tokyo, Japan, I began working as a self-taught artist in 2019.
            Using plants and nature as my main motifs, I create works with precise lines and vivid colors. <br />
            I strive to create artwork that is filled with honest emotion and brightens the feelings of those who see it.
            Currently, I am expanding my activities internationally, including <br /> New York and Los Angeles.
          </p>
        </div>

        </div>

        {/* Activity Section */}
        <div className="mt-12 grid grid-cols-1 px-2 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Activity</h3>
            <ul className="space-y-2 text-gray-800 list-none">
              <li>2024年 JR上野駅仮囲いアートイベント</li>
              <li>2024年 First solo exhibition 表参道</li>
              <li>2024年 NYC・Creston 壁画 ライブペイント</li>
              <li>2023年 名古屋・マリオットホテル 金魚の舞 ロビーアート作品デザイン</li>
              <li>2023年 浅草・ホテルKANZASHI パッケージデザイン</li>
              <li>2023年 Los Angeles 留学</li>
              <li>2023年 宮城県・Patisserie Promenade バレンタインボックスデザイン</li>
              <li>2023年 NY留学</li>
              <li>2022年 静岡県・S1 shop 自販機デザイン</li>
              <li>2022年 ロサンゼルス・The inconvenience store にてオリジナルTシャツ販売</li>
              <li>2022年 宮城県・Patisserie Promenade ロゴデザイン、パッケージデザイン</li>
              <li>2022年 沖縄渡嘉敷島・ペンションニライカナイ 壁画</li>
              <li>2022年 表参道・NewMake Labo ライブペインティング イベント開催</li>
              <li>2022年 新大久保・韓国食堂&カフェLuna カフェ店内壁画</li>
              <li>2021年 新大久保・韓国食堂&カフェLuna 階段壁画</li>
              <li>2020年 Under Water Creator ロゴデザイン</li>
              <li>2020年 小笠原諸島オリジナルマスクデザイン</li>
              <li>2020年 コロナ禍でオリジナルマスク販売、結婚式サイトハナユメに掲載</li>
              <li>2020年 台湾エステ会社Bonjomayの化粧品パッケージデザイン</li>
              <li>2019年 第46回近代日本美術協会展に入選</li>
              <li>2016年 自己流で絵を描き始める</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
