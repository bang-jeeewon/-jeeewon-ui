import { createFileRoute } from '@tanstack/react-router';
import { Code, SampleBox, Spacing, TitleComponent } from '@/_lib/components';
import {
  Box,
  Typography,
  Rating,
  Star,
  styled,
  Favorite,
  FavoriteBorder,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from '@jeeewon/ui';
import { useState } from 'react';
import type { IconContainerProps } from '@mui/material';

export const Route = createFileRoute('/rating/')({
  component: RouteComponent,
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const StyledRadioGroupRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const customIcons: {
  [index: string]: {
    icon: React.ReactElement<unknown>;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: '매우 불만족',
  },
  2: {
    icon: <SentimentDissatisfied color="error" />,
    label: '불만족',
  },
  3: {
    icon: <SentimentSatisfied color="warning" />,
    label: '보통',
  },
  4: {
    icon: <SentimentSatisfiedAlt color="success" />,
    label: '만족',
  },
  5: {
    icon: <SentimentVerySatisfied color="success" />,
    label: '매우 만족',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function RouteComponent() {
  const [value, setValue] = useState<number | null>(2);
  const [ratingValue, setRatingValue] = useState<number | null>(2);
  const [hoverValue, setHoverValue] = useState(-1);

  return (
    <>
      <TitleComponent title="Rating" description="사용자가 평점을 선택할 수 있게 합니다." />
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic rating
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ '& > legend': { mt: 2 } }}>
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(_event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography component="legend">Uncontrolled</Typography>
            <Rating
              name="simple-uncontrolled"
              onChange={(_event, newValue) => {
                console.log(newValue);
              }}
              defaultValue={2}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
          </Box>
        }
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Rating precision
      </Typography>
      <Typography>
        <Code>value</Code> prop을 사용하여 소수점 자리를 표시할 수 있습니다. <Code>precision</Code> prop으로 최소 증가 값을 설정할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          </Box>
        }
        code={`<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Hover feedback
      </Typography>
      <Typography>
        <Code>onChangeActive</Code> prop을 사용하여 유저가 정확한 평점을 선택할 수 있도록 피드백을 제공할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
            <Rating
              name="hover-feedback"
              value={ratingValue}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(_event, newRatingValue) => {
                setRatingValue(newRatingValue);
              }}
              onChangeActive={(_event, newHoverValue) => {
                setHoverValue(newHoverValue);
              }}
              emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {ratingValue !== null && <Box sx={{ ml: 2 }}>{labels[hoverValue !== -1 ? hoverValue : ratingValue]} </Box>}
          </Box>
        }
        code={`<Rating
  name="hover-feedback"
  value={ratingValue}
  precision={0.5}
  getLabelText={getLabelText}
  onChange={(_event, newRatingValue) => {
    setRatingValue(newRatingValue);
  }}
  onChangeActive={(_event, newHoverValue) => {
    setHoverValue(newHoverValue);
  }}
  emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
{ratingValue !== null && <Box sx={{ ml: 2 }}>{labels[hoverValue !== -1 ? hoverValue : ratingValue]} </Box>}`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Sizes
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" />
          </Box>
        }
        code={`<Rating name='size-small' defaultValue={2} size='small' />
<Rating name='size-medium' defaultValue={2}  />
<Rating name="size-large" defaultValue={2} size='large' />`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Customization
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Typography component="legend">Custom icon and color</Typography>
            <StyledRating
              name="cutomized-color"
              defaultValue={2}
              getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<Favorite fontSize="inherit" />}
              emptyIcon={<FavoriteBorder fontSize="inherit" />}
            />
            <Typography component="legend">10 stars</Typography>
            <Rating name="customized-10" defaultValue={2} max={10} />
          </Box>
        }
        code={`<Typography component="legend">Custom icon and color</Typography>
<StyledRating
name="cutomized-color"
defaultValue={2}
getLabelText={(value: number) => \`${value} Heart${value !== 1 ? 's' : ''}\`}
precision={0.5}
icon={<Favorite fontSize="inherit" />}
emptyIcon={<FavoriteBorder fontSize="inherit" />}
/>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Radio group
      </Typography>
      <Typography>
        <Code>highlightSelectedOnly</Code> prop을 사용하여 라디오 그룹을 사용할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <StyledRadioGroupRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
          />
        }
        code={`<StyledRadioGroupRating
name='highlight-selected-only'
defaultValue={2}
IconContainerComponent={IconContainer}
getLabelText={(value: number) => customIcons[value].label}
highlightSelectedOnly
/>`}
      />
    </>
  );
}
