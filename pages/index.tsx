import { ReactElement, useState } from 'react';

import { Content } from 'components/Content';
import { Header } from 'components/Header';
import { Stack } from 'design-system';

export default function Index(): ReactElement {
  const [login, setLogin] = useState<string>();
  return (
    <Stack>
      <Header onLoginChange={setLogin} />
      <Content login={login} />
    </Stack>
  );
}
