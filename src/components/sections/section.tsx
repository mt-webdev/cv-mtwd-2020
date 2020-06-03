import React, { ReactNode } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Heading } from './heading'


const styles = StyleSheet.create({
  sectionContainer: {
    padding: '0 var(--page-padding)',
    margin: '20px 20px 20px 0',
  },
  title: {
    marginBottom: 18,
  },
})

interface ISectionProps {
  title: string;
  children?: any;
}

export const Section = (props: ISectionProps) => {
  const {
    title,
    children
  } = props;

  return (
    <div className={css(styles.sectionContainer)}>
      <Heading className={css(styles.title)} title={title} type='h2' />
      {children}
    </div>
  )
}
