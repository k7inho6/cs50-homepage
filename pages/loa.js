import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsFillMoonFill, BsFillSunFill, BsGithub } from 'react-icons/bs';
import { IoMoonOutline } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Feelsgladman Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-stone-900">
        <section className="h-max">
          <Header />

          <div className="max-w-2xl flex-column content-center items-center mx-auto">
            <p className="text-black text-md font-bold text-4xl pt-20 pb-5 dark:text-gray-200">
              Lost Ark
            </p>
            <p className="text-black dark:text-gray-200 text-xl">
              Definitely the best MMORPG i've ever played, since there's a lot to do and the progression systems are pretty good (ofc there's RNG involved, but 
              not in a chaotic way). It's also a pay-to-win game, but you can do just fine without spending, and can even catch up to veteran players, since
              the game actually rewards you for the effort/time you put in.
            </p>
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5 pt-10">
              Combat
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5">
              Now, what actually makes this game the best MMORPG is it's combat. Of course it also depends on your class but in general, it's
              very dynamic and feels super fluid and satisfying.
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-10">Here are some nice vids that showcase some of LOA's combat:</p>
            <p className="text-black dark:text-gray-200 text-ml pb-5">Full footage of one of the main raids played by a deathblade (assassin class)</p>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/HMeeDrOHprg" title="【Lost Ark】Deathless Inferno Valtan Gate 2 Deathblade MVP POV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="text-black dark:text-gray-200 text-ml pt-10 pb-5">Montage of various raids played by a berserker on the KR version (warrior class)</p>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/8f96ksg6j8U" title="[로스트아크] 버서커 매드무비 : 버서커의 최고점" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5 pt-10">
              Downsides
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5"> Imo, some of Lost Ark's biggest downsides are:</p>
              <ul className="text-black dark:text-gray-200 text-xl pb-5">
                <li className="pb-3">1. Takes very long to open, and not very optimized overall</li>
                <li className="pb-3">2. Battle items bullshit that are present even in equalized content</li>
                <li className="pb-3">3. The MSQ is pain</li>
                <li className="pb-3">4. As an MMORPG, ofc it gets "grindy" or "chory". Not for everyone</li>
                <li className="pb-3">5. Probably sucks if you play with no friends</li>
              </ul>
              <p className="text-black dark:text-gray-200 text-xl pb-5">Even then, i highly recommend it if you are a MMORPG player and have friends to play or have enough social skills to make them in game (or if you just like the combat, cause it just feels too good)</p>
            
            <p className="text-black pt-5 font-bold text-2xl dark:text-gray-200 mb-5 pt-10">
              My own progression
            </p>
            <p className="text-black dark:text-gray-200 text-xl pb-5">For those already familiar with the game, i'm a day 1 global launch player
              , but since i'm pretty casual (and a bad time/resource manager and decision maker), i'm doing just ok with a 1490 +22 mayhem berserker main,
              1475 +21 EO soulfist alt and an WIP 1445 PS shadowhunter and surge deathblade. Have only cleared Valtan from the Inferno Modes, and should probably
              put more effort into the game since Brelshaza is coming soon (i prob won't tho).
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}