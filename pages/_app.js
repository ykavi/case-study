import Head from 'next/head';
import { MainLayout } from '@layout';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>CASE - Study</title>;
      <meta name="description" content={'description'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    </Head>

    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
);

export default MyApp;
