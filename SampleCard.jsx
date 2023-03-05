import React from 'react';
import { Tooltip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image1Image from 'src/assets/images/SampleCard_Image.png';
import { animated, useSpring, easings } from 'react-spring';
import useSampleCard from 'src/components/SampleCard/useSampleCard';

const TypeQuest = animated(
  styled('div')(({ theme }) => ({
    backgroundColor: theme.palette['Background']['Default'],
    boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.16)`,
    borderRadius: `8px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
    height: 'auto',
  }))
);

const ImageFrame = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Image1 = animated(
  styled('div')({
    backgroundImage: `url(${Image1Image})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    borderRadius: `6px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    alignSelf: `stretch`,
    height: `251px`,
    margin: `0px`,
  })
);

const Content = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px 20px 35px 20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Details = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const TitleTop = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title = animated(
  styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: theme.palette['Text']['Primary'],
    fontStyle: `normal`,
    fontFamily: `Heebo`,
    fontWeight: `700`,
    fontSize: `38px`,
    letterSpacing: `0px`,
    textDecoration: `underline`,
    textTransform: `none`,
  }))
);

const Q3Dots = animated(
  styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `4px`,
    height: `20px`,
  })
);

const Rectangle1 = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette['Text']['Primary'],
  borderRadius: `10px`,
  width: `4px`,
  height: `4px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Rectangle2 = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette['Text']['Primary'],
  borderRadius: `10px`,
  width: `4px`,
  height: `4px`,
  position: `absolute`,
  left: `0px`,
  top: `8px`,
}));

const Rectangle3 = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette['Text']['Primary'],
  borderRadius: `10px`,
  width: `4px`,
  height: `4px`,
  position: `absolute`,
  left: `0px`,
  top: `16px`,
}));

const Details1 = animated(
  styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: theme.palette['Text']['Primary'],
    fontStyle: `normal`,
    fontFamily: `Heebo`,
    fontWeight: `400`,
    fontSize: `16px`,
    letterSpacing: `0.15000000596046448px`,
    textDecoration: `none`,
    lineHeight: `150%`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `12px 0px 0px 0px`,
  }))
);

const ButtonContained = animated(
  styled(Button)({
    margin: `12px 0px 0px 0px`,
  })
);

function SampleCard(props) {
  const { fns } = useSampleCard(props);

  const [TypeQuestSpring, TypeQuestApi] = useSpring(() => ({
    config: {
      duration: 100,
      easing: easings['easeOutBack'],
    },
    delay: 0,
    from: { transform: 'scale(1)' },
  }));

  const [Image1Spring, Image1Api] = useSpring(() => ({
    config: {
      duration: 750,
      easing: easings['easeInOutQuint'],
    },
    delay: 1000,
    from: { transform: 'scale(0.9)', opacity: 0 },
  }));

  const [TitleSpring, TitleApi] = useSpring(() => ({
    config: {
      duration: 500,
      easing: easings['easeInOutExpo'],
    },
    delay: 1250,
    from: { transform: 'translateX(25px)', opacity: 0 },
  }));

  const [Q3DotsSpring, Q3DotsApi] = useSpring(() => ({
    config: {
      duration: 500,
      easing: easings['easeOutExpo'],
    },
    delay: 1250,
    from: { opacity: 0 },
  }));

  const [Details1Spring, Details1Api] = useSpring(() => ({
    config: {
      duration: 500,
      easing: easings['easeInOutExpo'],
    },
    delay: 1500,
    from: { transform: 'translateY(15px)', opacity: 0 },
  }));

  const [ButtonContainedSpring, ButtonContainedApi] = useSpring(() => ({
    config: {
      duration: 500,
      easing: easings['easeInOutExpo'],
    },
    delay: 1750,
    from: { transform: 'translateY(15px)', opacity: 0 },
  }));

  React.useEffect(() => {
    Image1Api.start({
      ...{ transform: 'scale(1)', opacity: 1 },
      delay: 1000,
      config: { duration: 750 },
    });
    TitleApi.start({
      ...{ transform: 'translateX(0px)', opacity: 1 },
      delay: 1250,
      config: { duration: 500 },
    });
    Q3DotsApi.start({
      ...{ opacity: 1 },
      delay: 1250,
      config: { duration: 500 },
    });
    Details1Api.start({
      ...{ transform: 'translateY(0px)', opacity: 1 },
      delay: 1500,
      config: { duration: 500 },
    });
    ButtonContainedApi.start({
      ...{ transform: 'translateY(0px)', opacity: 1 },
      delay: 1750,
      config: { duration: 500 },
    });
  }, []);

  return (
    <TypeQuest
      onMouseLeave={() => {
        TypeQuestApi.start({ transform: 'scale(1)' });
      }}
      onMouseEnter={() => {
        TypeQuestApi.start({ ...{ transform: 'scale(1.05)' }, delay: 0 });
      }}
      className={props.className}
      style={{ ...TypeQuestSpring }}
    >
      <ImageFrame>
        <Tooltip arrow={true} placement={'top'} title={'This is an Image'}>
          <Image1 style={{ ...Image1Spring }}></Image1>
        </Tooltip>
      </ImageFrame>
      <Content>
        <Details>
          <TitleTop>
            <Title style={{ ...TitleSpring }}>{'Title for the card'}</Title>
            <Q3Dots style={{ ...Q3DotsSpring }}>
              <Rectangle1></Rectangle1>
              <Rectangle2></Rectangle2>
              <Rectangle3></Rectangle3>
            </Q3Dots>
          </TitleTop>
          <Details1 style={{ ...Details1Spring }}>
            {
              'Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.'
            }
          </Details1>
          <ButtonContained
            variant="contained"
            size="large"
            color="primary"
            onClick={fns.handleButtonClick}
            style={{ ...ButtonContainedSpring }}
          >
            {' '}
            BOOK ME{' '}
          </ButtonContained>
        </Details>
      </Content>
    </TypeQuest>
  );
}

export default SampleCard;
