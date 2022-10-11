import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
