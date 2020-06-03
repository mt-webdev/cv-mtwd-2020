import React from 'react'
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  jobMeta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobMetaSub: {
    display: 'flex',
    flexDirection: 'column',
  },
  subMargin: {
    marginBottom: 6
  }
})

interface IJobMetaProps {
  date: string,
  location: string,
  description: string;
}

export const JobMeta = (props: Partial<IJobMetaProps>) => {
  const {
    date,
    location,
    description,
  } = props;

  return (
    <div className={css(styles.jobMeta)}>
      <span className={css(styles.jobMetaSub)}>
        {
          date?.length &&
          <span className={css(styles.subMargin)}>{date}</span>
        }
        {
          description?.length &&
          <span>{description}</span>
        }
      </span>

      {
        location?.length &&
        <span>{location}</span>
      }
    </div>
  )
}
