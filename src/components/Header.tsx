import { ReactElement, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { contentErrorAtom } from './ContentErrorBoundary';

import { loginAtom } from 'data/login';
import { Box, Button, Column, Columns, ContentBlock, Form, TextInput } from 'design-system';

export function Header(): ReactElement {
  const [value, setValue] = useState('');
  const onSubmit = useLoginSubmitHandler(value);
  return (
    <Form onSubmit={onSubmit}>
      <Box background="panelBackground" padding="medium" shadow="basic">
        <ContentBlock>
          <Columns space="small">
            <Column>
              <TextInput placeholder="Search for users" search value={value} onChange={setValue} />
            </Column>
            <Column width="content">
              <Button submit>Search</Button>
            </Column>
          </Columns>
        </ContentBlock>
      </Box>
    </Form>
  );
}

function useLoginSubmitHandler(value: string): () => void {
  const onLoginChange = useSetRecoilState(loginAtom);
  const setError = useSetRecoilState(contentErrorAtom);
  return useCallback(() => {
    onLoginChange(value);
    setError(undefined);
  }, [onLoginChange, setError, value]);
}
