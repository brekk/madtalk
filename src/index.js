import React from 'react';
import { render } from 'react-dom';

import { MDXProvider } from '@mdx-js/react';

import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Notes,
  mdxComponentMap
} from 'spectacle';


// SPECTACLE_CLI_MDX_START
import slides, { notes } from './slides.mdx';
// SPECTACLE_CLI_MDX_END


// SPECTACLE_CLI_THEME_START
const theme = {
  backdropStyle: {
    background: 'linear-gradient(-50deg, #101020, #2d0024)',
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh'
  },
  colors: {
    primary: '#fff',
    secondary: '#fc0068',
    tertiary: '##c8ff00'
  },
  fontSizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    text: '1.5em',
    monospace: '1.5rem',
  },
  fonts: {
    header: "'Fira Code', 'Fira Code Light'",
    text: "'Fira Code', 'Fira Code Light'",
    monospace: "'Fira Code', 'Fira Code Light'"
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop theme={theme} template={template}>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

render(<Presentation />, document.getElementById('root'));
