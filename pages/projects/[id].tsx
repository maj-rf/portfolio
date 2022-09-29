import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projectdata } from '../../components/data/projectData';
import { GetStaticProps } from 'next';
import { projectType } from '../../components/types/projectTypes';
import { Tags } from '../../components/project/Tags';
import styles from '../../styles/ProjectPage.module.scss';
import { HiArrowCircleLeft } from 'react-icons/hi';

type Props = {
  proj: projectType;
};

export const getStaticPaths = async () => {
  const data = projectdata;
  const paths = data.map((proj) => {
    return {
      params: { id: proj.title },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = projectdata.find((proj) => proj.title === id);
  return {
    props: {
      proj: data,
    },
  };
};

const ProjectPage = ({ proj }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.heading_container}>
        <button className={styles.back}>
          <Link href="/">
            <HiArrowCircleLeft size={30} />
          </Link>
        </button>
        <h1>{proj.title}</h1>
      </div>
      <Image src={proj.image} alt={proj.title} />
      {/* <p>{proj.description}</p> */}
      <ul className={styles.tag_container}>
        {proj.tags.map((tag) => {
          return <Tags key={tag + proj.title} tag={tag} />;
        })}
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel officia in
        ab excepturi aperiam ipsa velit, pariatur accusamus modi optio officiis
        provident sint molestias deserunt, sequi vitae hic reprehenderit! Libero
        dolor cumque quam eaque illum est repudiandae expedita, consequuntur
        facere.
      </p>
      <div>
        <button>
          <a target="_blank" href={proj.repo} rel="noopener noreferrer">
            Code
          </a>
        </button>
        <button>
          <a target="_blank" href={proj.live} rel="noopener noreferrer">
            Demo
          </a>
        </button>
      </div>
    </section>
  );
};

export default ProjectPage;
