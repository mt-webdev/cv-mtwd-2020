import React from 'react'
import photo from './../../assets/photo.jpg'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
  teaserContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 36,
    padding: '0 var(--page-padding)',
  },
  photoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoStamp: {
    borderRadius: '50%',
    height: 160,
    filter: 'contrast(1.2)',
  },
  text: {
    height: 110,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 25,
  },
  name: {
    fontSize: 46,
    fontWeight: 600,
  },
  title: {
    fontSize: 22,
    color: 'var(--dove-gray)',
    fontWeight: 600,
  },
  slogan: {
    fontSize: 16,
    fontWeight: 600,
  }
})

export const Teaser = () => {
  return (
    <section className={css(styles.teaserContainer)}>
      <div className={css(styles.photoContainer)}>
        <img className={css(styles.photoStamp)} src={photo} alt="Marco Traspel smiling" />
      </div>
      <div className={css(styles.text)}>
        <h1 className={css(styles.name)}>Marco Traspel</h1>
        <h2 className={css(styles.title)}>Fullstack Web Developer</h2>
        <h3 className={css(styles.slogan)}>Passionate about everything web.</h3>
      </div>
    </section>
  )
}
