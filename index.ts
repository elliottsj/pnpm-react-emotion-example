import styled from 'react-emotion';

interface IContainerProps {
  color: string;
}

export const Container = styled('div')<IContainerProps>(props => ({
  display: 'flex',
  backgroundColor: props.color
}));
