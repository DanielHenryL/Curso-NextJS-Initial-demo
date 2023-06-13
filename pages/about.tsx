import Link from 'next/link'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function aboutPage()  {
  return (
    <MainLayout title={'Hnery lagunas'} content={'About Page'}>
      <h1>About Page</h1>

      <h1 className={'description'}>
        Ir a <Link href={'/'}>Home</Link>
      </h1>
      <p className={'main'}>
        Get started by editing{' '};
        <code>pages/about.tsx</code>
      </p>
    </MainLayout>
  )
}
