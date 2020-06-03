import React from 'react'
import { css, StyleSheet } from 'aphrodite';
import { Section } from '../components/sections/section';
import { Heading } from '../components/sections/heading';
import { JobMeta } from '../components/sections/job-meta';
import { JobInfo } from '../components/sections/job-info';

const headingMargin = {
  marginBottom: 6
}

const styles = StyleSheet.create({
  jobs: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  job: {
    marginBottom: 32,
  },
  sectionContainer: {
    padding: '0 var(--page-padding)',
    margin: '20px 20px 20px 0',
  },
  title: {
    marginBottom: 18,
  },
  heading: {
    ...headingMargin
  }
})

export const Career = () => {
  return (
    <Section title='Werdegang'>
      <ul className={css(styles.jobs)}>

        <li className={css(styles.job)} aria-label="webArtig GmbH">
          <>
            <Heading className={css(styles.heading)} title='Lead Developer & technischer Projektmanager' type='h3' />
            <Heading className={css(styles.heading)} title='webArtig GmbH' type='h4' />
            <Heading className={css(styles.heading)} type='h5'>
              <JobMeta
                date='08/2018 – 08/2020'
                description='Software Agentur'
                location='Düsseldorf'
              />
            </Heading>
          </>

          <>
            <JobInfo
              bullets={[
                'Real-Estate-Management-System für die publity AG (React, React Native, Redux, RxJs, NestJs, PostgreSQL, AWS, Serverless, TypeScript)',
                'thyssenkrupp Global-Career-Site (Angular, Redux, RxJs, CMS, Docker, k8s, Sequelize, AWS, TypeScript, NodeJs)',
                'Prototyp eines neuen CMS für thyssenkrupp (Angular, Redux, RxJs, TypeScript, NodeJs)',
                'Erfolgreiche Umsetzung diverser Kampagnenseiten (Angular, Redux, RxJs, AWS, TypeScript, NodeJs, SQL/NoSQL)'
              ]}
            />
          </>

        </li>

        <li className={css(styles.job)} aria-label="vcs GmbH">
          <>
            <Heading className={css(styles.heading)} title='Software Developer' type='h3' />
            <Heading className={css(styles.heading)} title='vcs GmbH' type='h4' />
            <Heading className={css(styles.heading)} type='h5'>
              <JobMeta
                date='12/2016 – 05/2018'
                description='Sales und Distribution Software'
                location='München'
              />
            </Heading>
          </>

          <>
            <JobInfo
              bullets={[
                'Erfolgreiches Update von AngularJs zu Angular 2.',
                'Taskmanager-Modul zur Aufgabenverwaltung für Außendienstler.',
                'Visit-Modul zur Besuchsverwaltung für Außendienstler.',
                '(Angular, ASP.NET MVC, Entity Framework, TypeScript)'
              ]}
            />
          </>

        </li>

        <li className={css(styles.job)} aria-label="Grollmus München GmbH">
          <>
            <Heading className={css(styles.heading)} title='Software Developer' type='h3' />
            <Heading className={css(styles.heading)} title='Grollmus München GmbH' type='h4' />
            <Heading className={css(styles.heading)} type='h5'>
              <JobMeta
                date='03/2016 – 10/2018'
                description='Konfigurations-Software für elektronische Kontrollsysteme (Amazon of Siemens)'
                location='München'
              />
            </Heading>
          </>

          <>
            <JobInfo
              bullets={[
                'Konfigurations-Software für Siemens (TIA Selection Tool)',
                'Migrationstool innerhalb des TIA Selection Tools für Siemens.',
                '(Angular, ASP.NET MVC, Entity Framework, TypeScript)',
              ]}
            />
          </>

        </li>

        <li className={css(styles.job)} aria-label="ppedv AG">
          <>
            <Heading className={css(styles.heading)} title='Senior Trainer für Microsoft Web-/Development' type='h3' />
            <Heading className={css(styles.heading)} title='ppedv AG' type='h4' />
            <Heading className={css(styles.heading)} type='h5'>
              <JobMeta
                date='08/2012 – 04/2016'
                description='Microsoft Gold Learning Partner'
                location='Burghausen / München'
              />
            </Heading>
          </>

          <>
            <JobInfo
              bullets={[
                'Anspruchsvolle Inhouse Schulungen.',
                'Microsoft Schulungen (C#, ASP.NET, Sharepoint, Entity Framework)',
                'Web Schulungen (HTML5, CSS3, JS, REST)',
                '(.NET, .NET Core, ASP.NET MVC & WebForms, Entity Framework, ECMAScript 5, CSS3, HTML5, KnockoutJs, AngularJs, uvm.)'
              ]}
            />
          </>

        </li>

        <li className={css(styles.job)} aria-label="ppedv AG">
          <>
            <Heading className={css(styles.heading)} title='Fachartikelautor' type='h3' />
            <Heading className={css(styles.heading)} title='ppedv AG' type='h4' />
            <Heading className={css(styles.heading)} type='h5'>
              <JobMeta
                date='03/2013 – 04/2016'
                location='Burghausen / München'
              />
            </Heading>
          </>
        </li>

      </ul>
    </Section>
  )
}
