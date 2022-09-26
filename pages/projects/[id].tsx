import Image from 'next/image';
import { useRouter } from 'next/router';
import { projectdata } from '../../components/data/projectData';
import { GetStaticProps } from 'next';
import { projectType } from '../../components/types/projectTypes';

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
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{proj.title}</h1>
      <Image src={proj.image} alt={proj.title} />
      <p>{proj.description}</p>
      <div>
        <a target="_blank" href={proj.repo} rel="noopener noreferrer">
          Github
        </a>
        <a target="_blank" href={proj.live} rel="noopener noreferrer">
          Demo
        </a>
      </div>
      <button onClick={() => router.back()}>Back to Home</button>
    </div>
  );
};

export default ProjectPage;
