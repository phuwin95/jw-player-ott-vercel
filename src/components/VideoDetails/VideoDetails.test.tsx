import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import VideoDetails from './VideoDetails';

describe('<VideoDetails>', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <VideoDetails
          title="Test video"
          description="Video description"
          primaryMetadata="Primary metadata string"
          secondaryMetadata={<strong>Secondary metadata string</strong>}
          image="http://image.jpg"
          startWatchingButton={<button>Start watching</button>}
          shareButton={<button>share</button>}
          favoriteButton={<button>favorite</button>}
          trailerButton={<button>play trailer</button>}
        >
          <div>Related Videos</div>
        </VideoDetails>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('renders the image', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <VideoDetails
          title="Test video"
          description="Video description"
          primaryMetadata="Primary metadata string"
          secondaryMetadata={<strong>Secondary metadata string</strong>}
          image="http://image.jpg"
          startWatchingButton={<button>Start watching</button>}
          shareButton={<button>share</button>}
          favoriteButton={<button>favorite</button>}
          trailerButton={<button>play trailer</button>}
        >
          <div>Related Videos</div>
        </VideoDetails>
      </BrowserRouter>,
    );

    expect(getByAltText('Test video')).toHaveAttribute('src', 'http://image.jpg?width=1280');
  });
});
