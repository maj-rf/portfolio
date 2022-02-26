import styled from 'styled-components';

const TagElement = styled.li`
  border: 1px solid;
  border-radius: 5px;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 0.2rem;
`;
const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
function Tags({ proj }) {
  return (
    <TagsContainer>
      {proj.tags.map((tag) => {
        return <TagElement key={tag + proj.title}> {tag} </TagElement>;
      })}
    </TagsContainer>
  );
}

export default Tags;
