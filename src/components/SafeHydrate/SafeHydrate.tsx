import {useEffect, useState} from 'react';

// ввиду того, что весь роутинг осуществляется с помощью react-router, ssr выдает корректный html только при запросе главной страницы
// для всех остальных страниц проекта html главной не нужен и создает лишь лишний кадр с главной страницей, прежде чем отработает роутер
// @See https://jira.tcsbank.ru/browse/SP-6792
// @See https://dev.to/apkoponen/how-to-disable-server-side-rendering-ssr-in-next-js-1563
// Доработано для react-dom v18 с отключенным ssr
// https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
export function SafeHydrate({children}: {children: JSX.Element}): JSX.Element | null {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return showContent ? children : null;
}
