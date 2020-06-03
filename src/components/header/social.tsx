import React from 'react'
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  socialContainer: {
    backgroundColor: 'var(--seashell-gray)',
    width: '100%',
    padding: '12px var(--page-padding)',
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: 12,
    marginRight: 25,
  },
  lastInfo:{
    marginRight: 0,
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 10,
    fontWeight: 800,
    color: 'var(--smalt-blue)'
  },
});

export const Social = () => {
  return (
    <div className={css(styles.socialContainer)}>
      <span className={css(styles.info)}>
        <span className={css(styles.icon)}>@</span>
        mt-webdev@outlook.com
      </span>
      <span className={css(styles.info)}>
        <span className={css(styles.icon)}>P</span>
        Auf Nachfrage
      </span>
      <span className={css(styles.info, styles.lastInfo)}>
        <span className={css(styles.icon)}>L</span>
        Erkrath 40699, Deutschland
      </span>
    </div>
  )
}
