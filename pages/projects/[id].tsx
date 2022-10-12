import Image from 'next/image';
import Link from 'next/link';
import { projectdata } from '../../components/data/projectData';
import { GetStaticProps } from 'next';
import { projectType } from '../../components/types/projectTypes';
import { Tags } from '../../components/project/Tags';
import styles from '../../styles/ProjectPage.module.scss';
import { HiArrowCircleLeft } from 'react-icons/hi';
import { AiOutlineEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
type Props = {
  proj: projectType;
};

export const getStaticPaths = async () => {
  const data = projectdata;
  const paths = data.map((proj) => {
    return {
      params: { id: proj.id },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = projectdata.find((proj) => proj.id === id);
  return {
    props: {
      proj: data,
    },
  };
};

const ProjectPage = ({ proj }: Props) => {
  const router = useRouter();
  return (
    <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      variants={{
        initialState: {
          opacity: 0,
          x: -200,
          y: 0,
        },
        animateState: {
          opacity: 1,
          x: 0,
          y: 0,
        },
        exitState: { opacity: 0, x: 0, y: -100 },
      }}
    >
      <section className={styles.container}>
        <div className={styles.heading_container}>
          <Link href="/" scroll={false}>
            <a className={styles.back}>
              <HiArrowCircleLeft size={30} />
            </a>
          </Link>

          <h1>{proj.title}</h1>
        </div>
        <Image src={proj.image} alt={proj.title} />
        <ul className={styles.tag_container}>
          {proj.tags.map((tag) => {
            return <Tags key={tag + proj.title} tag={tag} />;
          })}
        </ul>
        <p>{proj.description}</p>
        <div className={styles.links}>
          <div className={styles.link}>
            <a target="_blank" href={proj.repo} rel="noopener noreferrer">
              <AiOutlineEye />
              Code
            </a>
          </div>

          <div className={styles.link}>
            <a target="_blank" href={proj.live} rel="noopener noreferrer">
              <AiFillGithub />
              Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectPage;
