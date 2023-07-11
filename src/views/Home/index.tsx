import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";
import "./Home.scss";

import WorldSlider from "../../components/WorldSilder";

import mainGroot from "../../assets/images/main-groot.png";
import textLogo from "../../assets/images/text-logo.png";
import nftImg from "../../assets/images/nft-img.png";
import mobileNftImg from "../../assets/images/mobile-nft-img.png";
import roadmap1 from "../../assets/images/roadmap1.png";
import roadmap2 from "../../assets/images/roadmap2.png";
import roadmap3 from "../../assets/images/roadmap3.png";
import roadmap4 from "../../assets/images/roadmap4.png";
import roadmap5 from "../../assets/images/roadmap5.png";
import roadmap6 from "../../assets/images/roadmap6.png";
import roadmap7 from "../../assets/images/roadmap7.png";
import roadmap8 from "../../assets/images/roadmap8.png";
import roadmap9 from "../../assets/images/roadmap9.png";
import roadmap10 from "../../assets/images/roadmap10.png";
import RoadmapItem from "../../components/RoadmapItem";
import { Redirect } from "react-router";
import { showAlertModal } from "../../state/modal";
import { useDispatch } from "react-redux";
import Alert from "../../components/Alert";
import { Box, Divider } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  if (sessionStorage.__spa_path) {
    const to = sessionStorage.__spa_path;
    sessionStorage.removeItem("__spa_path");
    return <Redirect to={to} />;
  }

  return (
    <Layout>
      <Alert />
      <section className="home-view">
        <Helmet title="Home" />
        <section className="mint-container" id="back-to-top-anchor">
          <img src={mainGroot} alt="main-groot" />
          <div className="content">
            <img src={textLogo} alt="text-logo" />
            <h6>GENERATIVE NFT</h6>
            <p>
              지금부터 닥터그루트의 모험을 담은
              <br />
              2,000개의 NFT를 소개합니다!
            </p>
            <div className="progress-container">
              <p>SOLD OUT!</p>
              <div className="bar-container">
                <div className="bar" style={{ width: "100%" }} />
              </div>
              <button
                className="minting-router-button-diable"
                onClick={() => {
                  dispatch(showAlertModal());
                }}
              >
                MINTING
              </button>
            </div>
          </div>
        </section>
        <Box sx={{ padding: "0px 12px" }}>
          <Divider
            sx={{
              borderBottom: "2px #000 solid",
              width: "100%",
              padding: "0px 20px",
            }}
          />
        </Box>
        <section id="gallery" className="gallery-container">
          <h6>Gallery</h6>
          <p className="pc-content">
            총 2,000개 제너러티브 아트 <b>NFT 한정 판매!</b>
            <br />
            <b>세상에 단 하나뿐인 아트</b>를 보유하고, <b>전용 혜택</b>도 받아
            가세요!
          </p>
          <p className="mobile-content">
            총 2,000개 제너러티브 아트 NFT 한정 판매!세상에 단 하나뿐인 아트를
            보유하고, 전용 혜택도 받아 가세요!
          </p>
          <img className="nft-pc" src={nftImg} alt="main-groot" />
          <img className="nft-mobile" src={mobileNftImg} alt="main-groot" />
        </section>
        <section id="worldview" className="worldview-container">
          <h6>Worldview</h6>
          <p className="pc-content">
            닥터그루트는 과연 마이크로바이옴 원료를 무사히 구하여{" "}
            <b>인류의 머리카락</b>과<br />
            <b>지구 환경</b>을 되돌릴 수 있을까요?
          </p>
          <p className="mobile-content">
            <b>닥터그루트</b>는 과연 마이크로바이옴 원료를 무사히 구하여{" "}
            <b>인류의 머리카락</b>과 <b>지구 환경</b>을 되돌릴 수 있을까요?
          </p>
          <WorldSlider />
        </section>
        <section id="roadmap" className="roadmap-container">
          <h6>Roadmap</h6>
          <p>
            <b>닥터그루트 NFT 홀더</b>를 위한 <b>다양한 혜택</b>을 소개합니다!
          </p>
          <div className="grid-container-pc">
            <RoadmapItem
              image={roadmap1}
              percent={10}
              description={
                "DSC 커뮤니티에서 열리는\n닥터그루트 공모전 수상자에게\nNFT & 샴푸 본품을 드려요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap2}
              percent={20}
              description={
                "2022.7.21~24\n코엑스 어반브레이크 전시에서 닥터그루트 유니버스를 경험해보세요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap3}
              percent={30}
              description={
                "닥터그루트 NFT 1차 민팅에 참여한\n 홀더분들에게 닥터그루트 마이크로바이옴캡슐 샴푸 400ml 정품과 탈모인류의 희망 키트를 드려요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap4}
              percent={40}
              description={
                "닥터그루트 NFT 홀더분들에게 재구매 시 사용 가능한 5% 할인쿠폰을 드려요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap5}
              percent={50}
              description={
                "닥터그루트 공식 인스타그램에서\n세계관 스토리와\n 팬아트를 만나보세요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap6}
              percent={60}
              description={
                "닥터그루트 NFT를 \n7개 이상 구매한 모든 홀더분들께\n NFT 1개 100% 에어드랍"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap7}
              percent={70}
              description={
                "추첨을 통해 \n마이크로서울 NFT 페스타\n입장권을 증정합니다."
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap8}
              percent={80}
              description={
                "레어리티가 높은 파츠를\n 랜덤으로 선정하여\n 크리스마스 선물을 드려요!"
              }
              isComplete
            />
            <div className="empty" />
            <RoadmapItem
              image={roadmap9}
              percent={90}
              description={
                "2차~5차 NFT 추가 민팅 시 \n닥터그루트가 준비한\n 선물이 팡팡!"
              }
              isComplete={false}
            />
            <RoadmapItem
              image={roadmap10}
              percent={100}
              description={
                "닥터그루트의 모험을 완주하셨군요! \nDSC 메타버스 내에서 \n활용 가능한 아이템을 \n받아가세요"
              }
              isComplete={false}
            />
          </div>
          <div className="grid-container-mobile">
            <RoadmapItem
              image={roadmap1}
              percent={10}
              description={
                "DSC 커뮤니티에서 열리는 닥터그루트 공모전 수상자에게 NFT & 샴푸 본품을 드려요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap2}
              percent={20}
              description={
                "2022.7.21~24\n코엑스 어반브레이크 전시에서 닥터그루트 유니버스를 경험해보세요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap3}
              percent={30}
              description={
                "닥터그루트 NFT 1차 민팅에 참여한 홀더분들에게 닥터그루트 마이크로바이옴캡슐 샴푸 400ml 정품과 탈모인류의 희망 키트를 드려요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap4}
              percent={40}
              description={
                "닥터그루트 NFT 홀더분들에게 재구매 시 사용 가능한 5% 할인쿠폰을 드려요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap5}
              percent={50}
              description={
                "닥터그루트 공식 인스타그램에서 세계관 스토리와 팬아트를 만나보세요"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap6}
              percent={60}
              description={
                "닥터그루트 NFT를 7개 이상 구매한 모든 홀더분들께 NFT 1개 100% 에어드랍"
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap7}
              percent={70}
              description={
                "추첨을 통해 \n마이크로서울 NFT 페스타입장권을 증정합니다."
              }
              isComplete
            />
            <RoadmapItem
              image={roadmap8}
              percent={80}
              description={
                "레어리티가 높은 파츠를 랜덤으로 선정하여 크리스마스 선물을 드려요!"
              }
              isComplete
            />
            <div className="empty" />
            <RoadmapItem
              image={roadmap9}
              percent={90}
              description={
                "2차~5차 NFT 추가 민팅 시 닥터그루트가 준비한 선물이 팡팡!"
              }
              isComplete={false}
            />
            <RoadmapItem
              image={roadmap10}
              percent={100}
              description={
                "닥터그루트의 모험을 완주하셨군요! \nDSC 메타버스 내에서 활용 가능한 아이템을 받아가세요"
              }
              isComplete={false}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Home;
