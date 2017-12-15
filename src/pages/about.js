import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <section>
    <div>
      <h1>About</h1>
      <h4>
        Diverse UI is a free set of user images that can be used in personal or
        commercial projects.
        <br />
        <br />
        We built Diverse UI because who we assume our users are, and how we
        represent that in our visuals, affects who those users turn out to be.
        We want those users to be diverse. For more information, we wrote{' '}
        <a
          href="https://uxdesign.cc/techs-diversity-problem-isn-t-only-in-the-hiring-numbers-edf00f7b5e95"
          target="_blank"
        >
          a blog post
        </a>{' '}
        about why we think diversity in UI mockups is important.
      </h4>
      <br />
      <br />
      <h4>
        <strong>
          For v2 - we're using Facebook auth which will make it easier to get
          more images with better demographic information.
        </strong>
        <br />
        <br />
        In the meantime, some of the v1 database will remain - which we admit
        isn't perfect. We avoided caricatures, but that doesn’t mean some images
        don’t feel a bit exaggerated, staged, or professional. We didn’t have a
        good way to recognize or account for preferred gender representation. In
        fact, <Link to="/submit">submitting your photo</Link> is one of the best
        ways to help out. You can help us make the most awesome set of real
        people on the internet.
      </h4>
    </div>
  </section>
)

export default AboutPage
