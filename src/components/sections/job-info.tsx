import React from 'react'
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  bulletList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingLeft: 16,
  },
  bulletItem: {
    fontSize: 14,
    marginBottom: 6,

    ':before': {
      content:  '\'\\2013\'',
      color: 'var(--smalt-blue)',
      fontWeight: 'bold',
      display: 'inline-block',
      width: '1em',
      marginLeft: '-1em',
    }
  }
});

interface IJobInfoProps {
  bullets: string[];
}

export const JobInfo = (props: IJobInfoProps) => {
  const {
    bullets = [],
  } = props;

  return (
    <ul className={css(styles.bulletList)}>
      {
        bullets.map((bullet: string, index: number) => {
          return (
            <li key={index} className={css(styles.bulletItem)}>
              {bullet}
            </li>
          );
        })
      }
    </ul>
  );
}
