import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
  headingH1: {
    fontSize: 46,
    color: 'black',
    fontWeight: 700,
  },
  headingH2: {
    fontSize: 22,
    color: 'var(--smalt-blue)',
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  headingH3: {
    fontSize: 16.5,
    color: 'black',
    fontWeight: 700,
  },
  headingH4: {
    fontSize: 16.5,
    color: 'black',
    fontWeight: 400,
  },
  headingH5: {
    fontSize: 12.5,
    color: 'var(--dove-gray)',
    fontWeight: 600,
    fontStyle: 'italic',
  }
})

interface IHeadingProps {
  title?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children?: any;
}

export const Heading = (props: IHeadingProps) => {
  const {
    title,
    type,
    className = '',
    children = undefined,
    ...rest
  } = props;

  if (type === 'h1') {
    return <h1
      className={`${className} ${css(styles.headingH2)}`}
      {...rest}
    >
      {children ?? title}
    </h1>;
  }

  if (type === 'h2') {
    return <h2
      className={`${className} ${css(styles.headingH2)}`}
      {...rest}
    >
      {children ?? title}
    </h2>;
  }

  if (type === 'h3') {
    return <h3
      className={`${className} ${css(styles.headingH3)}`}
      {...rest}
    >
      {children ?? title}
    </h3>;
  }

  if (type === 'h4') {
    return <h4
      className={`${className} ${css(styles.headingH4)}`}
      {...rest}
    >
      {children ?? title}
    </h4>;
  }

  return <h5
      className={`${className} ${css(styles.headingH5)}`}
    {...rest}
  >
    {children ?? title}
  </h5>;
}
