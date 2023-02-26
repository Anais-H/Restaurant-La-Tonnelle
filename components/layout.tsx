import Header from './header';

export default function Layout({ children, bannerImageSrc }: { children: React.ReactNode, bannerImageSrc: string }) {
  return (
    <>
        <Header bannerImageSrc={bannerImageSrc} />
        <div>{children}</div>
    </>
  );
}
