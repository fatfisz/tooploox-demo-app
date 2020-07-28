import { ReactElement, useState } from 'react';

import { Header } from 'components/Header';

export default function Index(): ReactElement {
  const [login, setLogin] = useState<string>();
  return (
    <>
      <Header onLoginChange={setLogin} />
      <pre>State: {JSON.stringify({ login }, null, 2)}</pre>
    </>
  );
}
