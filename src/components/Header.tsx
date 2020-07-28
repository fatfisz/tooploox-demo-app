import { ReactElement, useCallback, useState } from 'react';

import { Box, Button, Column, Columns, ContentBlock, Form, TextInput } from 'design-system';

export function Header({
  onLoginChange,
}: {
  onLoginChange: (value: string) => void;
}): ReactElement {
  const [value, setValue] = useState('');
  const onSubmit = useLoginSubmitHandler(value, onLoginChange);
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

function useLoginSubmitHandler(value: string, onLoginChange: (value: string) => void): () => void {
  return useCallback(() => {
    onLoginChange(value);
  }, [value, onLoginChange]);
}
