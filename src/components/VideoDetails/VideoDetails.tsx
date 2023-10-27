import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router';

import styles from './VideoDetails.module.scss';

import CollapsibleText from '#components/CollapsibleText/CollapsibleText';
import useBreakpoint, { Breakpoint } from '#src/hooks/useBreakpoint';
import Image from '#components/Image/Image';
import { testId } from '#src/utils/common';

type SecondaryMetadataWithTitle = { props: { children: Array<string> } };

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

  const episodeTitle = (secondaryMetadata as SecondaryMetadataWithTitle)?.props?.children[2];
  const makeEpisodeSubtitle = (title: string, primaryMetadata: string) => {
    const episodes = primaryMetadata?.split('•').pop();
    const episodeSubtitle = title + ' - ' + episodes;
    return episodeSubtitle;
  };

  return (
    <div data-testid={testId('cinema-layout')}>
      <div className={styles.video} data-testid={testId('video-details')}>
        <div className={classNames(styles.main, styles.mainPadding)}>
          <div data-type={videoType}>
            <Image className={classNames(styles.poster, { [styles.episode]: isEpisode, [styles.series]: !isEpisode })} image={image} alt={title} width={1280} />
          </div>
          <div className={classNames({ [styles.infoEpisode]: isEpisode, [styles.infoSeries]: !isEpisode })}>
            {secondaryMetadata && isEpisode ? (
              <h2 className={classNames(styles.title, { [styles.episode]: isEpisode, [styles.series]: !isEpisode })}>{episodeTitle}</h2>
            ) : (
              <h2 className={classNames(styles.title, { [styles.episode]: isEpisode, [styles.series]: !isEpisode })}>{title}</h2>
            )}
            <div className={styles.metaContainer}>
              {primaryMetadata && isEpisode ? (
                <div className={styles.primaryMetadata}>{makeEpisodeSubtitle(title, primaryMetadata as string)}</div>
              ) : (
                <div className={styles.primaryMetadata}>{primaryMetadata}</div>
              )}
              {secondaryMetadata && isEpisode ? '' : <div className={styles.secondaryMetadata}>{secondaryMetadata}</div>}
            </div>
            <CollapsibleText text={description} className={styles.description} maxHeight={isMobile ? 60 : 'none'} />
            <div className={classNames(styles.buttonBar, { [styles.episode]: isEpisode, [styles.series]: !isEpisode })}>
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
