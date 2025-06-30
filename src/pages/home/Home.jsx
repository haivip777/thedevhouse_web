import './home.css'
import hero_bg from '../../assets/home/hero_bg.png'
import { Search } from '../../components'
import { Foot } from '../../components'
import { useState } from 'react'
import { Card } from '../../components'
import a1 from '../../assets/games/a1.png'
import a2 from '../../assets/games/a2.png'
import a3 from '../../assets/games/a3.png'  
import a4 from '../../assets/games/a4.png'
import a5 from '../../assets/games/a5.png'
import a6 from '../../assets/games/a6.png'
import a7 from '../../assets/games/a7.png'
import a8 from '../../assets/games/a8.png'
import a9 from '../../assets/games/a9.png'
import a10 from '../../assets/games/a10.png'
import a11 from '../../assets/games/a11.png'
import a12 from '../../assets/games/a12.png'
import a13 from '../../assets/games/a13.png'
import a14 from '../../assets/games/a14.png'
import a15 from '../../assets/games/a15.png'


const Home = () => {
  const projects = [
  {
    id: 1,
    title: "League of Legends",
    tech: "React, SCSS",
    image: a1,
    description:
      "An iconic MOBA game where strategy and team synergy lead to intense competitive battles in diverse arenas.",
  },
  {
    id: 2,
    title: "Valorant",
    tech: "Vue, TypeScript",
    image: a2,
    description:
      "A tactical shooter blending precise aim with hero abilities, creating thrilling multiplayer combat experiences.",
  },
  {
    id: 3,
    title: "Genshin Impact",
    tech: "HTML, CSS, Vanilla JS",
    image: a3,
    description:
      "An expansive open-world adventure full of elemental magic, stunning landscapes, and deep character lore.",
  },
  {
    id: 4,
    title: "Call of Duty: Warzone",
    tech: "React, Tailwind CSS",
    image: a4,
    description:
      "Fast-paced battle royale warfare with realistic graphics and tight gunplay in large immersive maps.",
  },
  {
    id: 5,
    title: "Minecraft",
    tech: "Three.js, WebGL",
    image: a5,
    description:
      "A sandbox block-building game encouraging creativity, exploration, and community-driven mods and worlds.",
  },
  {
    id: 6,
    title: "Fortnite",
    tech: "Next.js, Styled Components",
    image: a6,
    description:
      "A vibrant battle royale featuring creative builds, quirky emotes, and constant in-game live events.",
  },
  {
    id: 7,
    title: "Roblox",
    tech: "React, Firebase",
    image: a7,
    description:
      "A massive online platform where users create, share, and play user-generated games across genres.",
  },
  {
    id: 8,
    title: "PUBG",
    tech: "Angular, SCSS",
    image: a8,
    description:
      "Realistic survival shooter where 100 players parachute onto an island and fight to be the last standing.",
  },
  {
    id: 9,
    title: "Elden Ring",
    tech: "React, Bootstrap",
    image: a9,
    description:
      "A dark fantasy RPG with sprawling world design, intense bosses, and deeply interconnected storytelling.",
  },
  {
    id: 10,
    title: "Apex Legends",
    tech: "Vue, Tailwind CSS",
    image: a10,
    description:
      "Team-based hero shooter with fluid mobility, fast gunplay, and unique character abilities in squads.",
  },
  {
    id: 11,
    title: "Mobile Legends",
    tech: "HTML, CSS, JS",
    image: a11,
    description:
      "A mobile MOBA offering quick matches, dynamic combat, and classic 5v5 lanes with jungle objectives.",
  },
  {
    id: 12,
    title: "Honkai: Star Rail",
    tech: "React, Zustand",
    image: a12,
    description:
      "Turn-based sci-fi RPG with stunning visuals and a rich narrative following interstellar journeys.",
  },
  {
    id: 13,
    title: "Among Us",
    tech: "Vanilla JS, CSS Modules",
    image: a13,
    description:
      "A social deduction party game where crewmates must find the impostors before being sabotaged.",
  },
  {
    id: 14,
    title: "Clash of Clans",
    tech: "Svelte, Tailwind",
    image: a14,
    description:
      "Strategic village-building and warfare game with real-time multiplayer battles and clan alliances.",
  },
  {
    id: 15,
    title: "The Witcher 3",
    tech: "React, GSAP",
    image: a15,
    description:
      "A dark and mature fantasy RPG following Geralt in a story-rich world full of beasts and politics.",
  },
  {
    id: 16,
    title: "Dota 2",
    tech: "React, Redux Toolkit",
    image: a1,
    description:
      "A complex strategy MOBA where every hero has immense depth and synergy, popular in global esports.",
  },
  {
    id: 17,
    title: "Cyberpunk 2077",
    tech: "Vue 3, Pinia",
    image: a2,
    description:
      "A futuristic open-world RPG with high-tech gear, neon cities, and narrative-rich missions.",
  },
  {
    id: 18,
    title: "Overwatch 2",
    tech: "React, Emotion CSS",
    image: a3,
    description:
      "A dynamic 5v5 team shooter with diverse heroes, each offering unique playstyles and strategies.",
  },
];


  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(start, start + itemsPerPage);
  
  return (
    <div className='dh__home section__padding'>
      <div className="dh__container">
        <section className="dh__home--hero">
          <div className="dh__home--hero_content">
            <h1 className="dh-hero-title gradient__text">Chào mừng bạn đến với The Dev House</h1>
            <p className="dh-hero-subtitle">Cung cấp giải pháp công nghệ hàng đầu, triển khai phát triển trang web, Unity game, deploy hạ tầng cloud chất lượng cao </p>
            <Search />
          </div>
          <div className="dh__home--hero_img">
            <img src={hero_bg} alt="hero_bg" />
          </div>
        </section>
        <div className="dh__home--projects">
          <h2 className="dh__projects-title">Hot nhất</h2>
          <p className="dh__text dh__projects-subtitle">Full Source code</p>

          <div className="dh__projects-cards">
            {currentProjects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </div>

          <div className="dh__projects-pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <Foot/>
      </div>
    </div>
  )
}

export default Home