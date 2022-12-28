import React from 'react';
import styled from "styled-components";

const CircleLoadingWrapper = styled.div`
  .circle-loading {
    width: 5rem;
    height: 5rem;
    border-radius: 7.5rem;
    position: relative;
    margin: 0 auto;
  }

  .circle-loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 1rem solid white;
    border-right-color: ${props => props.color || '#13D2B8'};
    border-bottom-color: ${props => props.color || '#13D2B8'};
    animation: circleLoading 1s forwards infinite linear;
  }

  @keyframes circleLoading {
    to {
      transform: rotate(360deg);
    }
  }
`;

const CircleDashedLoadingWrapper = styled.div`
  .dashed-loading {
    position: relative;
    height: 100%;
  }

  .dashed-loading:after,
  .dashed-loading:before {
    content: "";
    position: absolute;
    top: -25px;
    left: -25px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .dashed-loading:before {
    z-index: 5;
    border: 3px dashed ${props => props.color || '#13D2B8'};
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s linear infinite;
    animation: dashed 1s linear infinite;
  }

  .dashed-loading:after {
    z-index: 10;
    border: 3px solid ${props => props.color || '#13D2B8'};
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s ease infinite;
    animation: dashed 1s ease infinite;
  }

  @keyframes dashed {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Circle2LoadingWrapper = styled.div`
  .circle-loading2 {
    display: inline-flex;
    animation: loading2 1s infinite;
    div {
      width: 30px;
      height: 30px;
      border: 2px solid ${props => props.color || '#13D2B8'};
      border-radius: 50%;
      margin: 0 5px;
    }
  }

  @keyframes loading2 {
    50% {
      transform: rotate(200deg);
    }
    75% {
      transform: rotate(160deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const FadeLoadingWrapper = styled.div`
  .fade-loading {
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.color || '#13D2B8'};
    border-radius: 5rem;
    margin: 2rem auto;
    position: relative;
  }

  .fade-loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: inherit;
    animation: fade 1s forwards infinite linear;
  }

  @keyframes fade {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const PlayLoadingWrapper = styled.div`
  .player-loading {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(40deg, #ff6ec4, #7873f5);
    position: relative;
  }

  .player-play {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color || '#13D2B8'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .player-play:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: white;
    border-radius: inherit;
    animation: fade 1s infinite;
    z-index: -1;
  }

  @keyframes fade {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`;

const LineLoadingWrapper = styled.div`
  .line-loading {
    width: 100%;
    height: 0.5rem;
    position: relative;
    margin: 0 auto;
  }

  .line-loading:before {
    content: "";
    position: absolute;
    right: auto;
    left: 0;
    height: 100%;
    background-color: ${props => props.color || '#13D2B8'};
    animation: lineLoading 1s forwards infinite linear;
  }

  @keyframes lineLoading {
    0% {
      right: 100%;
    }
    50% {
      right: 0;
      left: 0;
    }
    100% {
      right: 0;
      left: 100%;
    }
  }
`;

const DotsLoadingWrapper = styled.div`
  .dots-loading {
    display: flex;
    justify-content: center;
  }

  .dots-loading > div {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: ${props => props.color || '#13D2B8'};
    margin: 0 1rem;
    animation: dotLoading 1s forwards infinite linear;
  }

  .dots-loading > div:nth-child(2) {
    animation-delay: 0.1s;
  }

  .dots-loading > div:nth-child(3) {
    animation-delay: 0.2s;
  }

  .dots-loading > div:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes dotLoading {
    to {
      opacity: 0;
    }
  }
`;

const BallLoadingWrapper = styled.div`
  .ball-loading {
    color: ${props => props.color || '#13D2B8'};
    width: 20px;
    height: 20px;
    border-radius: 100rem;
    background: ${props => props.color || '#13D2B8'};
    animation: ballLoading 1s cubic-bezier(0.075, 0.82, 0.165, 1) infinite
      alternate;
  }

  @keyframes ballLoading {
    100% {
      transform: translateY(-20px);
    }
  }
`;

const BallsLoadingWrapper = styled.div`
  .balls-loading {
    --count: 5;
    --circle: 360deg;
    --deg: calc(var(--circle) / var(--count));
    --duration: 1s;
    --delay: calc(var(--duration) / var(--count));
    width: 50px;
    height: 50px;
    position: relative;
  }

  .balls-loading div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(calc(var(--value) * var(--deg)));
  }

  .balls-loading div:before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 100rem;
    position: absolute;
    top: 0;
    right: 0;
    background: #2cccff;
    filter: hue-rotate(calc(var(--value) * 45deg));
    animation: ballsLoading var(--duration) infinite;
    animation-delay: calc(var(--value) * var(--delay));
  }

  @keyframes ballsLoading {
    100% {
      transform: scale(0.25);
    }
  }
`;

const SquareLoadingWrapper = styled.div`
  .square-loading {
    width: 100px;
    height: 100px;
    background-color: ${props => props.color || '#13D2B8'};
    border-radius: 8px;
    animation: flip 1.2s ease-in-out infinite;
  }

  @keyframes flip {
    0% {
      transform: perspective(200px) rotateX(0) rotateY(0);
    }
    50% {
      transform: perspective(200px) rotateX(180deg) rotateY(0);
    }
    100% {
      transform: perspective(200px) rotateX(180deg) rotateY(180deg);
    }
  }
`;

const CircleLoading = ({className, color}) => (
  <CircleLoadingWrapper color={color}>
    <div className={className}/>
  </CircleLoadingWrapper>
);

const CircleDashedLoading = ({className, color}) => (
  <CircleDashedLoadingWrapper color={color}>
    <div className={className}/>
  </CircleDashedLoadingWrapper>
);

const Circle2Loading = ({className, color}) => (
  <Circle2LoadingWrapper color={color}>
    <div className={className}>
      <div/>
      <div/>
    </div>
  </Circle2LoadingWrapper>
);

const FadeLoading = ({className, color}) => (
  <FadeLoadingWrapper color={color}>
    <div className={className}/>
  </FadeLoadingWrapper>
);

const PlayLoading = ({className, color}) => (
  <PlayLoadingWrapper color={color}>
    <div className={className}>
      <div className="player-play">
        <i className="fa fa-play"/>
      </div>
    </div>
  </PlayLoadingWrapper>
);

const LineLoading = ({className, color}) => (
  <LineLoadingWrapper color={color}>
    <div className={className}/>
  </LineLoadingWrapper>
);

const DotsLoading = ({className, color}) => (
  <DotsLoadingWrapper color={color}>
    <div className={className}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </DotsLoadingWrapper>
);

const BallLoading = ({className, color}) => (
  <BallLoadingWrapper color={color}>
    <div className={className}/>
  </BallLoadingWrapper>
);

const BallsLoading = ({className, color}) => (
  <BallsLoadingWrapper color={color}>
    <div className={className}>
      <div style={{'--value': '1'}}/>
      <div style={{'--value': '2'}}/>
      <div style={{'--value': '3'}}/>
      <div style={{'--value': '4'}}/>
      <div style={{'--value': '5'}}/>
    </div>
  </BallsLoadingWrapper>
);

const SquareLoading = ({className, color}) => (
  <SquareLoadingWrapper color={color}>
    <div className={className}/>
  </SquareLoadingWrapper>
);

export const LOADING_TYPE = {
  CIRCLE_LOADING: "circle-loading",
  DASHED_LOADING: "dashed-loading",
  CIRCLE_LOADING2: "circle-loading2",
  FADE_LOADING: "fade-loading",
  PLAYER_LOADING: "player-loading",
  LINE_LOADING: "line-loading",
  DOTS_LOADING: "dots-loading",
  BALL_LOADING: "ball-loading",
  BALLS_LOADING: "balls-loading",
  SQUARE_LOADING: "square-loading",
};

function MultiLoading({
  className = '',
  color = '',
}) {

  switch (className) {
    case LOADING_TYPE.CIRCLE_LOADING:
      return <CircleLoading className={className} color={color}/>;
    case LOADING_TYPE.DASHED_LOADING:
      return <CircleDashedLoading className={className} color={color}/>;
    case LOADING_TYPE.CIRCLE_LOADING2:
      return <Circle2Loading className={className} color={color}/>;
    case LOADING_TYPE.FADE_LOADING:
      return <FadeLoading className={className} color={color}/>;
    case LOADING_TYPE.PLAYER_LOADING:
      return <PlayLoading className={className} color={color}/>;
    case LOADING_TYPE.LINE_LOADING:
      return <LineLoading className={className} color={color}/>;
    case LOADING_TYPE.DOTS_LOADING:
      return <DotsLoading className={className} color={color}/>;
    case LOADING_TYPE.BALL_LOADING:
      return <BallLoading className={className} color={color}/>;
    case LOADING_TYPE.BALLS_LOADING:
      return <BallsLoading className={className} color={color}/>;
    case LOADING_TYPE.SQUARE_LOADING:
      return <SquareLoading className={className} color={color}/>;
    default:
      return null;
  }
}

export default MultiLoading;