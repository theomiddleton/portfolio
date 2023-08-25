import React from 'react'
import Head from 'next/head'

import NavigationLinks1 from '../components/navigation-links1'
import GalleryCard2 from '../components/gallery-card2'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>tm-portfolio-23</title>
          <meta property="og:title" content="tm-portfolio-23" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/be0159a4-e9c0-4262-a216-6ff2d97f9079/ee3e45c0-dac2-4ceb-b9ee-4cca3d12dafd?org_if_sml=1"
          />
          <meta name="description" content="tm-portfolio-23" />
        </Head>
        <header data-role="Header" className="home-header">
          <img alt="logo" src="/logo-1500h.png" className="home-image" />
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <a
              href="https://www.instagram.com/theomiddleton_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon02">
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
                className="home-image01"
              />
            </a>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image02"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks1 rootClassName="rootClassName16"></NavigationLinks1>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container02">
          <div className="home-gallery">
            <div className="home-container03">
              <div className="home-container04">
                <div className="home-container05">
                  <a
                    href="https://unsplash.com/photos/9s7yHnTDv6c"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02"
                  >
                    <GalleryCard2
                      imageSrc="https://images.unsplash.com/photo-1662315236996-2a4a2b9c8bc5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1286&amp;q=80"
                      description="A hippo in the sun"
                      rootClassName="rootClassName2"
                      className="home-component1"
                    ></GalleryCard2>
                  </a>
                </div>
                <div className="home-container06">
                  <a
                    href="https://unsplash.com/photos/iANsUkOrA78"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link03"
                  >
                    <GalleryCard2
                      imageSrc="https://images.unsplash.com/photo-1692814463091-2c400066bacc?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1286&amp;q=80"
                      description="Two swim in a summer lagoon"
                      rootClassName="rootClassName3"
                      className="home-component2"
                    ></GalleryCard2>
                  </a>
                </div>
              </div>
              <div className="home-container07">
                <a
                  href="https://theom.darkroom.com/products/997160"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <GalleryCard2
                    imageSrc="https://images.unsplash.com/photo-1682357344476-ba235e807fd9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1173&amp;q=80"
                    description="A beached red white and blue boat"
                    rootClassName="rootClassName"
                    className="home-component3"
                  ></GalleryCard2>
                </a>
              </div>
            </div>
            <div className="home-container08">
              <a
                href="https://theom.darkroom.com/products/867715"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                <GalleryCard2
                  imageSrc="https://images.unsplash.com/photo-1662315215682-b2e0d34b67cc?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1286&amp;q=80"
                  description="An aerial view of Chicago"
                  rootClassName="rootClassName4"
                  className="home-component4"
                ></GalleryCard2>
              </a>
            </div>
          </div>
          <div className="home-gallery1">
            <div className="home-container09">
              <a
                href="https://unsplash.com/photos/olpJjyfLi7c"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1682357344479-5dd358c2758d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                  loading="lazy"
                  className="home-image03"
                />
              </a>
            </div>
            <div className="home-container10">
              <a
                href="https://unsplash.com/photos/SOg9-O8IfDQ"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1640969408430-8cb3d3907f8c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                  loading="lazy"
                  className="home-image04"
                />
              </a>
            </div>
            <div className="home-container11">
              <a
                href="https://theom.darkroom.com/products/867719"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1671561281549-72de087e5e1b?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                  loading="lazy"
                  className="home-image05"
                />
              </a>
            </div>
            <div className="home-container12">
              <a
                href="https://unsplash.com/photos/sJBhjimsHmU"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1640302812223-1d459e94458f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=700&amp;q=80"
                  loading="lazy"
                  className="home-image06"
                />
              </a>
            </div>
            <div className="home-container13">
              <a
                href="https://unsplash.com/photos/3IpMfFXy16I"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1640302180977-5cd02fff3bf8?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1200&amp;q=80"
                  loading="lazy"
                  className="home-image07"
                />
              </a>
            </div>
            <div className="home-container14">
              <a
                href="https://theom.darkroom.com/products/873790"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <img
                  alt="image"
                  src="https://res.cloudinary.com/tm-portfolio/image/upload/v1692819060/scza1ntekm5onsc6rxzp.jpg"
                  loading="eager"
                  className="home-image08"
                />
              </a>
            </div>
          </div>
          <div className="home-gallery2">
            <div className="home-container15">
              <a
                href="https://theom.darkroom.com/products/1064259"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <img
                  alt="image"
                  src="https://res.cloudinary.com/tm-portfolio/image/upload/v1688485140/portfolio/snow-tree_mcocko.jpg"
                  className="home-image09"
                />
              </a>
            </div>
            <div className="home-container16">
              <a
                href="https://unsplash.com/photos/cEnZbReeE74"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1646501954486-70c1c83ca6cc?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=700&amp;q=80"
                  className="home-image10"
                />
              </a>
            </div>
            <div className="home-container17">
              <a
                href="https://unsplash.com/photos/a47o4V9m90U"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1640453429246-abfca178a3b6?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                  className="home-image11"
                />
              </a>
            </div>
            <div className="home-container18">
              <a
                href="https://theom.darkroom.com/products/851206"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1671561281539-9118b754502c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=1300&amp;q=80"
                  className="home-image12"
                />
              </a>
            </div>
            <div className="home-container19">
              <a
                href="https://theom.darkroom.com/products/867714"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <img
                  alt="image"
                  src="https://res.cloudinary.com/tm-portfolio/image/upload/v1688485094/portfolio/firework_2_rrcue8.jpg"
                  className="home-image13"
                />
              </a>
            </div>
            <div className="home-container20">
              <a
                href="https://unsplash.com/photos/u0JbAxXmohY"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1692814554733-f487d10f6eea?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=600&amp;q=80"
                  className="home-image14"
                />
              </a>
            </div>
            <div className="home-container21">
              <a
                href="https://unsplash.com/photos/ixU5_q4-V3A"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1640302169800-ff06e478bc66?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=300&amp;q=80"
                  className="home-image15"
                />
              </a>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <img alt="logo" src="/logo-1500h.png" className="home-image16" />
          <span className="home-text">
            © 2021 - 2023 Theo Middleton, All Rights Reserved.
          </span>
          <div className="home-icon-group2">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon12">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <a
              href="https://www.instagram.com/theomiddleton_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
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
                className="home-image17"
              />
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
            object-fit: cover;
          }
          .home-icon-group {
            position: relative;
            transition: 0.3s;
          }
          .home-icon-group:hover {
            transform: scale(0.98);
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
            transition: 0.3s;
          }
          .home-icon:hover {
            transform: rotate(1turn);
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-icon02:hover {
            transform: rotate(1turn);
          }
          .home-image01 {
            top: 0px;
            right: 0px;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-image01:hover {
            transform: rotate(1turn);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image02 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-gallery {
            width: 100%;
            height: 1000px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: unit;
            padding-left: 40px;
            padding-right: 56px;
          }
          .home-container03 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container04 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container05 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container05:hover {
            transform: scale(0.98);
          }
          .home-link02 {
            display: contents;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-container06 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container06:hover {
            transform: scale(0.98);
          }
          .home-link03 {
            display: contents;
          }
          .home-component2 {
            text-decoration: none;
          }
          .home-container07 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container07:hover {
            transform: scale(0.98);
          }
          .home-link04 {
            display: contents;
          }
          .home-component3 {
            text-decoration: none;
          }
          .home-container08 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container08:hover {
            transform: scale(0.98);
          }
          .home-link05 {
            display: contents;
          }
          .home-component4 {
            text-decoration: none;
          }
          .home-gallery1 {
            width: 100%;
            height: 1200px;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: 'a b b' 'a b b' 'a c d' 'a c d' 'e e d' 'e e f' 'e e f';
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 1;
            grid-area: a;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container09:hover {
            transform: scale(0.98);
          }
          .home-link06 {
            display: contents;
          }
          .home-image03 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: b;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-container10:hover {
            transform: scale(0.98);
          }
          .home-link07 {
            display: contents;
          }
          .home-image04 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            grid-area: c;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container11:hover {
            transform: scale(0.98);
          }
          .home-link08 {
            display: contents;
          }
          .home-image05 {
            width: 488px;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 626px;
            display: flex;
            position: relative;
            grid-area: d;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container12:hover {
            transform: scale(0.98);
          }
          .home-link09 {
            display: contents;
          }
          .home-image06 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: e;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container13:hover {
            transform: scale(0.98);
          }
          .home-link10 {
            display: contents;
          }
          .home-image07 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 264px;
            display: flex;
            grid-area: f;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container14:hover {
            transform: scale(0.98);
          }
          .home-link11 {
            display: contents;
          }
          .home-image08 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-gallery2 {
            width: 100%;
            height: 1228px;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: 'a b b' 'a b b' 'a c d' 'a c d' 'e e d' 'e e f' 'e e f';
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-container15 {
            top: -3px;
            flex: 0 0 auto;
            left: -439px;
            width: 440px;
            height: 100%;
            display: flex;
            position: absolute;
            grid-area: b;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-container15:hover {
            transform: scale(0.98);
          }
          .home-link12 {
            display: contents;
          }
          .home-image09 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container16 {
            flex: 0 0 auto;
            left: 458px;
            width: 406px;
            height: 615px;
            display: flex;
            opacity: 1;
            position: absolute;
            grid-area: a;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container16:hover {
            transform: scale(0.98);
          }
          .home-link13 {
            display: contents;
          }
          .home-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container17 {
            flex: 0 0 auto;
            left: -440px;
            width: 440px;
            height: 322px;
            display: flex;
            position: absolute;
            grid-area: c;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container17:hover {
            transform: scale(0.98);
          }
          .home-link14 {
            display: contents;
          }
          .home-image11 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container18 {
            flex: 0 0 auto;
            right: 0px;
            width: 423px;
            height: 100%;
            display: flex;
            position: absolute;
            grid-area: b;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-container18:hover {
            transform: scale(0.98);
          }
          .home-link15 {
            display: contents;
          }
          .home-image12 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 626px;
            display: flex;
            position: relative;
            grid-area: d;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container19:hover {
            transform: scale(0.98);
          }
          .home-link16 {
            display: contents;
          }
          .home-image13 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            bottom: var(--dl-space-space-twounits);
            height: 550px;
            display: flex;
            position: absolute;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container20:hover {
            transform: scale(0.98);
          }
          .home-link17 {
            display: contents;
          }
          .home-image14 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 245px;
            display: flex;
            grid-area: f;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container21:hover {
            transform: scale(0.98);
          }
          .home-link18 {
            display: contents;
          }
          .home-image15 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-image16 {
            height: 2rem;
            object-fit: cover;
          }
          .home-icon-group2 {
            position: relative;
            transition: 0.3s;
          }
          .home-icon-group2:hover {
            transform: scale(0.98);
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
            transition: 0.3s;
          }
          .home-icon12:hover {
            transform: rotate(1turn);
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-icon14:hover {
            transform: rotate(1turn);
          }
          .home-image17 {
            top: 0px;
            right: 0px;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-image17:hover {
            transform: rotate(1turn);
          }
          @media (max-width: 991px) {
            .home-container08 {
              width: 100%;
            }
            .home-gallery1 {
              grid-gap: var(--dl-space-space-unit);
            }
            .home-gallery2 {
              grid-gap: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
              flex-direction: column;
            }
            .home-gallery1 {
              height: auto;
              display: flex;
              padding: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-gallery2 {
              height: auto;
              display: flex;
              padding: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-icon-group {
              display: none;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-container03 {
              width: auto;
            }
            .home-gallery1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .home-gallery2 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image16 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-icon-group2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
