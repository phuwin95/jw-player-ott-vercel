import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router';

import styles from './VideoDetails.module.scss';

import CollapsibleText from '#components/CollapsibleText/CollapsibleText';
import useBreakpoint, { Breakpoint } from '#src/hooks/useBreakpoint';
import Image from '#components/Image/Image';
import { testId } from '#src/utils/common';

type Props = {
  title: string;
  description: string;
  primaryMetadata: React.ReactNode;
  secondaryMetadata?: React.ReactNode;
  image?: string;
  startWatchingButton: React.ReactNode;
  shareButton: React.ReactNode;
  favoriteButton?: React.ReactNode;
  trailerButton?: React.ReactNode;
  children: React.ReactNode;
  // type?: string;
};

const VideoDetails: React.FC<Props> = ({
  title,
  description,
  primaryMetadata,
  secondaryMetadata,
  image,
  startWatchingButton,
  shareButton,
  favoriteButton,
  trailerButton,
  children,
  // type,
}) => {
  const breakpoint: Breakpoint = useBreakpoint();
  const isMobile = breakpoint === Breakpoint.xs;

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const isEpisode = Boolean(query.get('e'));

  const videoType = isEpisode ? 'episode' : 'series';

  return (
    <div data-testid={testId('cinema-layout')}>
      <div className={styles.video} data-testid={testId('video-details')}>
        <div className={classNames(styles.main)}>
          <figure data-type={videoType} className={styles.imageContainer}>
            <Image className={styles.poster} image={image} alt={title} width={1280} />
          </figure>
          <div className={classNames(isEpisode ? styles.infoEpisode : styles.infoSeries, styles.mainPadding)}>
            <h2 className={classNames(styles.title, isEpisode ? styles.episode : styles.series)}>{title}</h2>
            <div className={styles.metaContainer}>
              <div className={styles.primaryMetadata}>{primaryMetadata}</div>
              {secondaryMetadata && <div className={styles.secondaryMetadata}>{secondaryMetadata}</div>}
            </div>
            <CollapsibleText text={description} className={styles.description} maxHeight={isMobile ? 60 : 'none'} />
            <div className={classNames(isEpisode ? styles.buttonBarEpisode : styles.buttonBarSeries)}>
              {startWatchingButton}
              {trailerButton}
              {favoriteButton}
              {shareButton}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default VideoDetails;
