import BackgroundPreviewPageClient from './client';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default function BackgroundPreviewPage() {
  return <BackgroundPreviewPageClient />;
}
