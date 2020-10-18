// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Contact from '../components/Contact';
import { useSiteMetadata } from '../hooks';

const ContactTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Contact - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact">
        <p>I'd love to hear from you. Send any questions, feedback, or recommendations my way!</p>
      	<Contact></Contact>
      </Page>
    </Layout>
  );
};

export default ContactTemplate;
