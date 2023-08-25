import React from 'react'
import Head from 'next/head'

import GalleryCard from '../components/gallery-card.js'
import styles from '../styles/home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
        <Head>
            <title>tm-portfolio-23</title>
            <meta name="description" content="The portfolio of Theo Middleton" />
            <meta property="og:title" content="tm-portfolio-23" />
            <meta
              property="og:description"
              content="The portfolio of Theo Middleton"
            />
            <meta
              property="og:image"
              content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/be0159a4-e9c0-4262-a216-6ff2d97f9079/ee3e45c0-dac2-4ceb-b9ee-4cca3d12dafd?org_if_sml=1"
            />
        </Head>
      <header data-role="Header" className={styles['header']}>
        <img alt="logo" src="/logo-1500h.png" className={styles['image']} />
        <div className={styles['icon-group']}>
          <svg viewBox="0 0 950.8571428571428 1024" className={styles['icon']}>
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <a
            href="https://www.instagram.com/theomiddleton_/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon02']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a
            href="https://unsplash.com/@theom_"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="image"
              src="/unsplash_symbol_16x16.svg"
              className={styles['image01']}
            />
          </a>
        </div>
        <div data-role="MobileMenu" className={styles['mobile-menu']}>
          <div className={styles['nav']}>
            <div className={styles['container01']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image02']}
              />
              <div
                data-role="CloseMobileMenu"
                className={styles['close-mobile-menu']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon06']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon08']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon10']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['container02']}>
        <div className={styles['gallery']}>
          <div className={styles['container03']}>
            <div className={styles['container04']}>
              <div className={styles['container05']}>
                <GalleryCard
                  imageSrc="https://images.unsplash.com/photo-1662315236996-2a4a2b9c8bc5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1286&amp;q=80"
                  description="A hippo in the sun"
                  rootClassName="rootClassName11"
                  className={styles['component']}
                ></GalleryCard>
              </div>
              <div className={styles['container06']}>
                <GalleryCard
                  imageSrc="https://images.unsplash.com/photo-1692814463091-2c400066bacc?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1286&amp;q=80"
                  description="Two swim in a summer lagoon"
                  rootClassName="rootClassName12"
                  className={styles['component1']}
                ></GalleryCard>
              </div>
            </div>
            <div className={styles['container07']}>
              <GalleryCard
                imageSrc="https://images.unsplash.com/photo-1682357344476-ba235e807fd9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1173&amp;q=80"
                description="A beached red white and blue boat"
                rootClassName="rootClassName10"
                className={styles['component2']}
              ></GalleryCard>
            </div>
          </div>
          <div className={styles['container08']}>
            <GalleryCard
              imageSrc="https://images.unsplash.com/photo-1662315215682-b2e0d34b67cc?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1286&amp;q=80"
              description="An aerial view of Chicago"
              rootClassName="rootClassName9"
              className={styles['component3']}
            ></GalleryCard>
          </div>
        </div>
        <div className={styles['gallery1']}>
          <div className={styles['container09']}>
            <a
              href="https://unsplash.com/photos/olpJjyfLi7c"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link02']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1682357344479-5dd358c2758d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                loading="lazy"
                className={styles['image03']}
              />
            </a>
          </div>
          <div className={styles['container10']}>
            <a
              href="https://unsplash.com/photos/SOg9-O8IfDQ"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link03']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1640969408430-8cb3d3907f8c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                loading="lazy"
                className={styles['image04']}
              />
            </a>
          </div>
          <div className={styles['container11']}>
            <a
              href="https://theom.darkroom.com/products/867719"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link04']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1671561281549-72de087e5e1b?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                loading="lazy"
                className={styles['image05']}
              />
            </a>
          </div>
          <div className={styles['container12']}>
            <a
              href="https://unsplash.com/photos/sJBhjimsHmU"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link05']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1640302812223-1d459e94458f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=700&amp;q=80"
                loading="lazy"
                className={styles['image06']}
              />
            </a>
          </div>
          <div className={styles['container13']}>
            <a
              href="https://unsplash.com/photos/3IpMfFXy16I"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link06']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1640302180977-5cd02fff3bf8?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                loading="lazy"
                className={styles['image07']}
              />
            </a>
          </div>
          <div className={styles['container14']}>
            <a
              href="https://theom.darkroom.com/products/873790"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link07']}
            >
              <img
                alt="image"
                src="https://res.cloudinary.com/tm-portfolio/image/upload/v1692819060/scza1ntekm5onsc6rxzp.jpg"
                loading="eager"
                className={styles['image08']}
              />
            </a>
          </div>
        </div>
        <div className={styles['gallery2']}>
          <div className={styles['container15']}>
            <a
              href="https://theom.darkroom.com/products/1064259"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link08']}
            >
              <img
                alt="image"
                src="https://res.cloudinary.com/tm-portfolio/image/upload/v1688485140/portfolio/snow-tree_mcocko.jpg"
                className={styles['image09']}
              />
            </a>
          </div>
          <div className={styles['container16']}>
            <a
              href="https://unsplash.com/photos/cEnZbReeE74"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link09']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1646501954486-70c1c83ca6cc?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=700&amp;q=80"
                className={styles['image10']}
              />
            </a>
          </div>
          <div className={styles['container17']}>
            <a
              href="https://unsplash.com/photos/a47o4V9m90U"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link10']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1640453429246-abfca178a3b6?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                className={styles['image11']}
              />
            </a>
          </div>
          <div className={styles['container18']}>
            <a
              href="https://theom.darkroom.com/products/851206"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link11']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1671561281539-9118b754502c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1300&amp;q=80"
                className={styles['image12']}
              />
            </a>
          </div>
          <div className={styles['container19']}>
            <a
              href="https://theom.darkroom.com/products/867714"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link12']}
            >
              <img
                alt="image"
                src="https://res.cloudinary.com/tm-portfolio/image/upload/v1688485094/portfolio/firework_2_rrcue8.jpg"
                className={styles['image13']}
              />
            </a>
          </div>
          <div className={styles['container20']}>
            <a
              href="https://unsplash.com/photos/u0JbAxXmohY"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link13']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1692814554733-f487d10f6eea?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=600&amp;q=80"
                className={styles['image14']}
              />
            </a>
          </div>
          <div className={styles['container21']}>
            <a
              href="https://unsplash.com/photos/ixU5_q4-V3A"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link14']}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1640302169800-ff06e478bc66?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=300&amp;q=80"
                className={styles['image15']}
              />
            </a>
          </div>
        </div>
      </div>
      <footer className={styles['footer']}>
        <img alt="logo" src="/logo-1500h.png" className={styles['image16']} />
        <span className={styles['text']}>
          © 2021 - 2023 Theo Middleton, All Rights Reserved.
        </span>
        <div className={styles['icon-group2']}>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className={styles['icon12']}
          >
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <a
            href="https://www.instagram.com/theomiddleton_/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon14']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a
            href="https://unsplash.com/@theom_"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="image"
              src="/unsplash_symbol_16x16.svg"
              className={styles['image17']}
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
