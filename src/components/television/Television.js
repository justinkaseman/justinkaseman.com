import React, { useState, useEffect } from "react";
import {
  Container,
  Tv,
  Screen,
  Speaker,
  Volume,
  ChannelUp,
  ChannelDown,
  Button,
  ButtonChannel,
  Power,
  Footer,
  ErrorNoise,
  ErrorEffect,
  Input,
  Title,
  CTA
  //   OldFilter,
  //   ScrollTextContainer,
  //   ScrollText,
} from "./styles";
import Subtitles from "./Subtitles";
import Video from "./Video";

const Television = ({ channels = [] }) => {
  const [power, setPower] = useState(false);
  const [channel, setChannel] = useState(1);
  const [volume, setVolume] = useState(0);
  const { title, video, description, technology, url } = channels[channel - 1];

  useEffect(() => {
    setTimeout(() => setPower(true), 1000);
  }, []);

  return (
    <Container>
      <Tv>
        <Screen>
          <ErrorNoise>
            <ErrorEffect power={power}>
              {power && (
                <>
                  <Video src={video} />
                  <Title>
                    <p>{`${channel} - ${title}`}</p>
                  </Title>
                  <Subtitles
                    description={description}
                    technology={technology}
                  />
                  <CTA
                    onClick={() => {
                      window.open(url, "_blank");
                    }}
                  >
                    <a href={url}>SEE NOW!</a>
                  </CTA>
                </>
              )}
            </ErrorEffect>
          </ErrorNoise>
        </Screen>
        <Speaker />
        <ChannelUp>
          <ButtonChannel
            centered
            onClick={() => {
              if (channel + 1 > channels.length) return setChannel(1);
              return setChannel(channel + 1);
            }}
          />
        </ChannelUp>
        <ChannelDown>
          <ButtonChannel
            centered
            onClick={() => {
              if (channel - 1 < 1) return setChannel(channels.length);
              return setChannel(channel - 1);
            }}
          />
        </ChannelDown>
        <Volume>
          <Input
            type="range"
            min="0"
            // Temporarily disabled
            // max="100"
            max="0"
            value={volume}
            onChange={e => setVolume(e.target.value)}
          />
        </Volume>
        <Power power={power}>
          <Button onClick={() => setPower(!power)} />
        </Power>
        <Footer />
      </Tv>
    </Container>
  );
};

export { Television };
