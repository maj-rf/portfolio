import React from 'react';
import { useRouter } from 'next/router';
import { projectdata } from '../../components/data/projectData';
import { GetStaticProps } from 'next';
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
      item: data,
    },
  };
};

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{id}</h1>
      <button onClick={() => router.back()}>Back to Projects</button>
    </div>
  );
};

export default ProjectPage;
