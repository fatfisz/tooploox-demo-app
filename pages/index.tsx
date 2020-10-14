import { ReactElement } from 'react';

import { Content } from 'components/Content';
import { Header } from 'components/Header';
import { Stack } from 'design-system';

export default function Index(): ReactElement {
  return (
    <Stack>
      <Header />
      <Content />
    </Stack>
  );
}
