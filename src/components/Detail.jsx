import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://cdn.vox-cdn.com/thumbor/kLhMHqhPRHYV2SPs-qOgIw_uO6I=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63304028/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg"
          alt="background"
        />
      </Background>
      <ImageTitle>
        <img src="/images/imagetitle.png" alt="not found" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="icon" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="icon" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="icon" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2020 • 2h30m • Fantasy ,Adventure ,Sci-Fi ,Action</SubTitle>
      <Description>
        After half of all life is snapped away by Thanos, the Avengers are left
        scattered and divided. Now with a way to reverse the damage, the
        Avengers and their allies must assemble once more and learn to put
        differences aside in order to work together and set things right.
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.6;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  letter-spacing: 1.8px;
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  background: rgb(249, 249, 249);
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;

  span {
    color: white;
    font-size: 30px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: black;
`;

const SubTitle = styled.div`
  margin-top: 25px;
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  color: rgb(249, 249, 249);
`;
const Description = styled.div`
  font-size: 20px;
  line-height: 1.4;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
