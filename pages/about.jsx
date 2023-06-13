import Link from 'next/link'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { DarkLayout } from '../components/Layouts/DarkLayout'

export default function AboutPage()  {
  return (
    <>
        <h1>About Page</h1>
        <h1 className={'description'}>
          Ir a <Link href={'/'}> Home</Link>
        </h1>
        <p className={'main'}>
          Get started by editing{' '};
          <code>pages/about.tsx</code>
        </p>
    </>
  )
}
AboutPage.getLayout = function getLayout( page ){
  return (
    <MainLayout title={'Daniel About'} content={'About Page'}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}